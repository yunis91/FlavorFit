import { LucideIcon } from 'lucide-react'

import { ISelectItem } from '@/shared/types'

export interface ISidebarMenuAccordionItem<K extends string = string> {
  isInitiallyOpen?: boolean
  name: string
  key: K
  icon: LucideIcon
  items: ISelectItem[]
}
