import type { PropsWithChildren } from 'react'

import { Header } from '@/features/layout/header/Header'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <Header />
      <main className="m-5 max-w-full rounded-3xl bg-white p-6">
        {children}
      </main>
    </div>
  )
}
