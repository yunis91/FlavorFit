'use client'

import { useAuth } from '../auth/hooks/useAuth'

export function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="text-2xl">
      Hallo,
      <span className="font-bold">
        {' '}
        {user?.profile?.fullName || 'Anonymous'}
      </span>
    </div>
  )
}
