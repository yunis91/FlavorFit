import { LucideIcon } from 'lucide-react'

import { ISelectItem } from '@/shared/types'

export interface ISidebarMenuAccordionItem {
  isInitiallyOpen?: boolean
  name: string
  icon: LucideIcon
  items: ISelectItem[]
}
