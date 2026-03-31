import { ChevronDown, CornerDownRight } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/shared/components/ui/collapsible'

import { Button } from '../../ui/button'

import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'
import { cn } from '@/shared/utils'

interface Props {
  item: ISidebarMenuAccordionItem
  activeValue?: string
  onValueChange?: (value: string) => void
}

export function MenuAccordionItem({ item, activeValue, onValueChange }: Props) {
  return (
    <Collapsible defaultOpen={item.isInitiallyOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            'group hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent flex w-full items-center justify-between opacity-80 transition-none aria-expanded:opacity-100',
            {
              'bg-accent': item.items.some(child => child.value === activeValue)
            }
          )}
        >
          <span className="flex items-center gap-2 text-sm font-medium">
            <item.icon size={22} />
            {item.name}
          </span>
          <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="space-y-2 pt-2 pl-4">
          {item.items.map(child => (
            <li
              key={child.value}
              className={cn('opacity-50', {
                'opacity-100': activeValue === child.value
              })}
            >
              <button
                className="flex w-full items-center justify-between"
                onClick={() => onValueChange?.(child.value)}
              >
                <span className="flex items-center gap-1.5">
                  <CornerDownRight size={16} />
                  <span>{child.label}</span>
                </span>

                {!!child.badgeValue && (
                  <span className="flex min-h-6 min-w-6 items-center rounded-2xl bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">
                    {child.badgeValue}
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
