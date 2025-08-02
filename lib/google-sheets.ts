import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

export interface Competition {
  id: string;
  title: string;
  description: string;
  participants: string;
  prize: string;
  location: string;
  registrationDeadline: string;
  organizer: string;
  image: string;
  status: 'Active' | 'Upcoming' | 'Completed';
  category: string;
  tags: string[];
  website?: string;
  requirements?: string;
  eventDate?: string;
  ig?: string;
}

export async function getCompetitionsFromSheet(): Promise<Competition[]> {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    
    // Debug logging
    console.log('🔍 Attempting to fetch competitions from Google Sheets...');
    console.log('📊 Spreadsheet ID:', spreadsheetId ? 'Set' : 'NOT SET');
    console.log('🔑 Client Email:', process.env.GOOGLE_SHEETS_CLIENT_EMAIL ? 'Set' : 'NOT SET');
    console.log('🔑 Private Key:', process.env.GOOGLE_SHEETS_PRIVATE_KEY ? 'Set' : 'NOT SET');

    if (!spreadsheetId) {
      console.error('❌ GOOGLE_SHEETS_SPREADSHEET_ID is not set');
      throw new Error('Spreadsheet ID not configured');
    }

    if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_PRIVATE_KEY) {
      console.error('❌ Google Sheets credentials are not properly configured');
      throw new Error('Google Sheets credentials not configured');
    }

    // Fix private key format
    let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    if (privateKey) {
      // Remove quotes if present
      privateKey = privateKey.replace(/^["']|["']$/g, '');
      // Replace literal \n with actual newlines
      privateKey = privateKey.replace(/\\n/g, '\n');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // First, let's get the sheet metadata to understand the structure
    console.log('📋 Getting sheet metadata...');
    const sheetResponse = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const sheetNames = sheetResponse.data.sheets?.map(sheet => sheet.properties?.title);
    console.log('📋 Available sheets:', sheetNames);

    // Try different ranges to ensure we get all data
    const ranges = [
      'Competitions!A2:P',  // Full range including Event Date
      'Competitions!A2:N',  // Without Event Date
      'Competitions!A:P',   // All columns including header
      'Competitions!A:N',   // All columns without Event Date
    ];

    let rows: any[][] = [];
    let usedRange = '';

    for (const range of ranges) {
      try {
        console.log(`🔍 Trying range: ${range}`);
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range,
        });

        const currentRows = response.data.values;
        console.log(`📈 Rows found with range ${range}:`, currentRows ? currentRows.length : 0);
        
        if (currentRows && currentRows.length > 0) {
          rows = currentRows;
          usedRange = range;
          console.log(`✅ Using range: ${range}`);
          break;
        }
      } catch (error) {
        console.log(`❌ Range ${range} failed:`, error);
        continue;
      }
    }

    console.log('📈 Final rows count:', rows.length);
    console.log('📋 All rows from Google Sheets:', JSON.stringify(rows, null, 2));
    
    if (!rows || rows.length === 0) {
      console.log('⚠️ No data found in spreadsheet');
      throw new Error('No data found in spreadsheet');
    }

    const competitions = rows.map((row, index) => {
      console.log(`📝 Processing row ${index + 1}:`, row);
      
      // Ensure we have at least 14 columns
      const safeRow = Array.isArray(row) ? row : [];
      
      // Log the raw data for debugging
      console.log(`🔍 Raw data for row ${index + 1}:`, {
        id: safeRow[0],
        title: safeRow[1],
        description: safeRow[2],
        participants: safeRow[3],
        prize: safeRow[4],
        location: safeRow[5],
        registrationDeadline: safeRow[6],
        organizer: safeRow[7],
        image: safeRow[8],
        status: safeRow[9],
        category: safeRow[10],
        tags: safeRow[11],
        website: safeRow[12],
        requirements: safeRow[13],
        eventDate: safeRow[14],
        ig: safeRow[15],
      });
      
      return {
        id: safeRow[0] || `comp-${index + 1}`,
        title: safeRow[1] || 'Untitled Competition',
        description: safeRow[2] || 'No description available',
        participants: (safeRow[3]) || 0,
        prize: safeRow[4] || 'TBA',
        location: safeRow[5] || 'TBA',
        registrationDeadline: safeRow[6] || 'TBA',
        organizer: safeRow[7] || 'TBA',
        image: safeRow[8] || 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&crop=center',
        status: (safeRow[9] as 'Active' | 'Upcoming' | 'Completed') || 'Upcoming',
        category: safeRow[10] || 'General',
        tags: safeRow[11] ? safeRow[11].split(',').map((tag: string) => tag.trim()) : ['General'],
        website: safeRow[12] || '',
        requirements: safeRow[13] || 'No specific requirements',
        eventDate: safeRow[14] || '',
        ig: safeRow[15] || '',
      };
    });

    console.log('✅ Successfully processed', competitions.length, 'competitions');
    console.log('📊 Sample competition:', competitions[0]);
    console.log('🔍 Used range:', usedRange);
    return competitions;
  } catch (error) {
    console.error('❌ Error fetching competitions from Google Sheets:', error);
    console.error('🔍 Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
}

// Fungsi untuk mendapatkan kompetisi berdasarkan filter
export async function getFilteredCompetitions(filters: {
  category?: string;
  status?: string;
  search?: string;
}): Promise<Competition[]> {
  console.log('🔍 Filtering competitions with:', filters);
  const competitions = await getCompetitionsFromSheet();
  
  const filtered = competitions.filter(competition => {
    if (filters.category && competition.category !== filters.category) return false;
    if (filters.status && competition.status !== filters.status) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        competition.title.toLowerCase().includes(searchLower) ||
        competition.description.toLowerCase().includes(searchLower) ||
        competition.organizer.toLowerCase().includes(searchLower) ||
        competition.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });

  console.log('✅ Filtered to', filtered.length, 'competitions');
  return filtered;
} 