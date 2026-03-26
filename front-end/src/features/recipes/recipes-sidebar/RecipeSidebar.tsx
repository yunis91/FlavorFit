import { CookingPot, Search } from 'lucide-react'

import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion'
import { Input } from '@/shared/components/ui/input'

export default function RecipeSidebar() {
  return (
    <div className="w-1/4 rounded-xl border bg-white p-6">
      <div className="mb-5 grid w-full gap-2">
        <div className="relative">
          <Search
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Search by recipes"
          />
        </div>
      </div>
      <SidebarMenuAccordion
        data={[
          {
            icon: CookingPot,
            name: 'Meal Types',
            items: [
              {
                label: 'Breakfast',
                value: 'Breakfast'
              },
              {
                label: 'Lunch',
                value: 'Lunch'
              },
              {
                label: 'Dinner',
                value: 'Dinner'
              }
            ]
          }
        ]}
      />
    </div>
  )
}
