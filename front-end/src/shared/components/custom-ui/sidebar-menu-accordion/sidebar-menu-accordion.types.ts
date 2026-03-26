import { LucideIcon } from 'lucide-react'

import { ISelectItem } from '@/shared/types'

export interface ISidebarMenuAccordionItem {
  name: string
  icon: LucideIcon
  items: ISelectItem[]
}
