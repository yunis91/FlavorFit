'use client'

import {
  Dna,
  Info,
  Mail,
  Mars,
  Settings,
  User,
  Venus,
  VenusAndMars
} from 'lucide-react'
import type { Metadata } from 'next'

import { useAuth } from '@/features/auth/hooks/useAuth'
import { Logout } from '@/features/auth/ui/Logout'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export default function ProfilePage() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <User className="h-6 w-6" />
        <span>{user?.profile?.fullName}</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="h-6 w-6" />
        <span>{user?.email}</span>
      </div>
      <div className="flex items-center gap-2">
        <Dna className="h-6 w-6" />
        <span>Age: {user?.profile?.age}</span>
      </div>
      <div className="flex items-center gap-2">
        {user?.profile?.gender === 'MALE' ? (
          <Mars className="h-6 w-6" />
        ) : user?.profile?.gender === 'FEMALE' ? (
          <Venus className="h-6 w-6" />
        ) : (
          <VenusAndMars className="h-6 w-6" />
        )}
        <span>{user?.profile?.gender}</span>
      </div>
      <div className="flex items-center gap-2">
        <Info className="h-6 w-6" />
        <span>{user?.profile?.bio}</span>
      </div>
    </div>
  )
}
