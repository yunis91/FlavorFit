import { LucideIcon } from 'lucide-react'
import React from 'react'

interface Props {
  Icon: LucideIcon
  children?: React.ReactNode
}

export function HeadingWithIcon({ Icon, children }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        size={26}
        className="opacity-50"
      />
      <h2 className="text-xl font-semibold">{children}</h2>
    </div>
  )
}
