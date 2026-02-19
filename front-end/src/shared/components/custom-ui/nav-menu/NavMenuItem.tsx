import Link from 'next/link'

import { IMenuItem } from './nav-menu.types'
import { cn } from '@/shared/utils'

interface Props {
  menuItem: IMenuItem
  isActive: boolean
}

export function NavMenuItem({ isActive, menuItem }: Props) {
  return (
    <li>
      <Link
        href={menuItem.href}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-xl border-none px-3 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out',
          isActive
            ? 'bg-foreground text-white'
            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
        )}
      >
        <menuItem.icon
          className="size-4"
          aria-hidden="true"
        />
        <span>{menuItem.label}</span>
      </Link>
    </li>
  )
}
