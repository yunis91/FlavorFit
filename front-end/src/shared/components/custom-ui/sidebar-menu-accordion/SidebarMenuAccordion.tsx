import { MenuAccordionItem } from './MenuAccordionItem'
import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'

interface Props {
  data: ISidebarMenuAccordionItem[]
}

export function SidebarMenuAccordion({ data }: Props) {
  return (
    <div className="">
      {data.map(item => (
        <MenuAccordionItem
          key={item.name}
          item={item}
        />
      ))}
    </div>
  )
}
