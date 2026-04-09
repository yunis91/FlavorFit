import { Search } from 'lucide-react'

import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion'
import { Input } from '@/shared/components/ui/input'

import { recipeSidebarMenuData } from './recipe-sidebar-menu.data'
import { TRecipeFilters } from './recipe-sidebar-menu.types'

interface Props {
  filters: TRecipeFilters
  searchTerm: string
  setSearchTerm: (term: string) => void
  setFilters: (filters: Partial<TRecipeFilters>) => void
}

export default function RecipeSidebar({
  filters,
  searchTerm,
  setSearchTerm,
  setFilters
}: Props) {
  const setActiveFilter = (key: keyof TRecipeFilters, value: string) => {
    setFilters({ [key]: value })
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
        values={filters}
        onValueChange={setActiveFilter}
      />
    </div>
  )
}
