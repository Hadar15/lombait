'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // Ensure page starts at top on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if this is the first load (no scroll position saved)
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
} 