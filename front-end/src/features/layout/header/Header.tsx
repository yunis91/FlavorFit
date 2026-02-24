'use client'

import { Bell, Headset } from 'lucide-react'
import Link from 'next/link'

import { useAuth } from '@/features/auth/hooks/useAuth'

import { NavMenu } from '@/shared/components/custom-ui/nav-menu/NavMenu'
import { UserInfo } from '@/shared/components/custom-ui/user-info/UserInfo'
import { Button } from '@/shared/components/ui/button'

import { PAGES } from '@/shared/config/page.config'

import { navMenuItems } from './nav.data'
import { IconLogo } from '@/shared/ui/icons/IconLogo'

export function Header() {
  const { user } = useAuth()

  return (
    <header className="flex items-center justify-between gap-2 p-5">
      <div className="flex items-center gap-7">
        <Link
          href={PAGES.DASHBOARD}
          aria-label="Link to Dashboard"
          className="from-primary to-primary-dark flex size-9 cursor-pointer items-center justify-center rounded-full bg-linear-to-t transition-transform duration-150 ease-in-out hover:scale-105"
        >
          <IconLogo className="size-4 text-white" />
        </Link>
        <NavMenu menu={navMenuItems} />
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="soft"
          size={'icon-lg'}
        >
          <Headset />
        </Button>
        <Button
          variant="soft"
          size={'icon-lg'}
          className="mr-2"
        >
          <Bell />
        </Button>

        <UserInfo
          avatarUrl="https://avatars.githubusercontent.com/u/9839363"
          name={'Anonymous'}
          email={user?.email || ''}
        />
      </div>
    </header>
  )
}
