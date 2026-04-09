import { Search } from 'lucide-react'

import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion'
import { Input } from '@/shared/components/ui/input'

import { recipeSidebarMenuData } from './recipe-sidebar-menu.data'

interface Props {
  filters: string
  searchTerm: string
  setSearchTerm: (term: string) => void
  setFilters: (filters: string) => void
}

export default function RecipeSidebar({
  filters,
  searchTerm,
  setSearchTerm,
  setFilters
}: Props) {
  const setActiveFilter = (filter: string) => {
    setFilters(filter)
  }

  return (
    <div className="w-full max-w-70 rounded-2xl border bg-white p-4">
      <div className="mb-5 grid w-full gap-2">
        <div className="relative">
          <Search
            size={16}
            className="absolute top-3 left-3 opacity-50"
          />
          <Input
            className="pl-9"
            placeholder="Search by recipes"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <SidebarMenuAccordion
        data={recipeSidebarMenuData}
        activeFilter={filters}
        onValueChange={setActiveFilter}
      />
    </div>
  )
}
