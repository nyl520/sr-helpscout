'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { HelpScoutContextProvider } from '@helpscout/ui-kit';
import '../index.css';

const App = dynamic(() => import('../App'), { ssr: false });

export default function Page() {
  return (
    <HelpScoutContextProvider>
      <App />
    </HelpScoutContextProvider>
  );
}
