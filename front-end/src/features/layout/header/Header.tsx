'use client'

import { NavMenu } from '@/shared/components/custom-ui/nav-menu/NavMenu'

import { navMenuItems } from './nav.data'
import { IconLogo } from '@/shared/ui/icons/IconLogo'

export function Header() {
  return (
    <header className="flex items-center gap-3.5 p-5">
      <div className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-linear-to-t from-[#7659eb] to-[#977eff] transition-transform duration-150 ease-in-out hover:scale-105">
        <IconLogo className="size-4 text-white" />
      </div>
      <NavMenu menu={navMenuItems} />
    </header>
  )
}
