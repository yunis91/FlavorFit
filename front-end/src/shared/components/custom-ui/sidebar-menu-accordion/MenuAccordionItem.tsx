import { CornerDownRight } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/shared/components/ui/collapsible'

import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'

interface Props {
  item: ISidebarMenuAccordionItem
}

export function MenuAccordionItem({ item }: Props) {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <span className="flex items-center gap-3">
          <item.icon />
          {item.name}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="flex flex-col gap-2">
          {item.items.map(child => (
            <li key={child.value}>
              <button className="flex w-full items-center justify-between">
                <span className="flex items-center gap-1">
                  <CornerDownRight />
                  <span>{child.label}</span>
                </span>

                {!!child.badgeValue && (
                  <span className="min-h-6 min-w-6 rounded-full bg-red-100 px-2 py-0.5 text-sm text-red-500">
                    + {child.badgeValue}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
