'use client'

import { ApolloProvider } from '@apollo/client/react'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'react-hot-toast'

import { TooltipProvider } from '@/shared/components/ui/tooltip'

import { getApolloClient } from '@/shared/lib/apollo/apollo-client'

const apollo = getApolloClient()
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <ApolloProvider client={apollo}>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster
          position="top-center"
          containerClassName="mt-16 font-mono text-sm"
        />
      </ApolloProvider>
    </NuqsAdapter>
  )
}
