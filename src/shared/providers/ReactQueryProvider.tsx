'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: { children: React.ReactNode }): JSX.Element {
  // useState to ensure that the client is created only once on the client
  const [client] = useState(() => queryClient);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
