import { LucideIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

import { TRecipeCardSize } from '../types/recipe-card.types'

interface Props extends PropsWithChildren {
  Icon: LucideIcon
  size?: TRecipeCardSize
}

export function RecipeCardBadge({ Icon, size, children }: Props) {
  return <div>RecipeCardBadge</div>
}
