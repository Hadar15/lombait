'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface RefreshButtonProps {
  onRefresh?: () => void;
  className?: string;
}

export default function RefreshButton({ onRefresh, className }: RefreshButtonProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      console.log('🔄 Manual refresh triggered...');

      // Call refresh API
      const response = await fetch('/api/refresh', {
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Refresh successful:', data);
        
        // Call parent refresh function
        if (onRefresh) {
          onRefresh();
        }
        
        // Reload page after a short delay
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        console.error('❌ Refresh failed:', response.status);
      }
    } catch (error) {
      console.error('❌ Refresh error:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <Button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className={`bg-blue-600 hover:bg-blue-700 text-white ${className}`}
      size="sm"
    >
      <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
      {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
    </Button>
  );
} 