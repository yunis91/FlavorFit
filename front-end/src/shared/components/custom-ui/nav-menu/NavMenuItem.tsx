import Link from 'next/link'

import { IMenuItem } from './nav-menu.types'
import { cn } from '@/shared/utils'

interface Props {
  menuItem: IMenuItem
  isActive: boolean
}

export function NavMenuItem({ isActive, menuItem }: Props) {
  return (
    <Link
      href={menuItem.href}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out',
        isActive
          ? 'bg-foreground text-white'
          : 'bg-[#e9e9e9] text-[#696969] hover:bg-gray-200'
      )}
    >
      <menuItem.icon
        className="size-4"
        aria-hidden="true"
      />
      <span>{menuItem.label}</span>
    </Link>
  )
}
