import { Clock4, Flame } from 'lucide-react'

import { GetRecipesQuery } from '@/__generated__/graphql'

import { TRecipeCardSize } from '../../types/recipe-card.types'

import { RecipeCardBadge } from './RecipeCardBadge'

interface Props {
  recipe: GetRecipesQuery['recipes'][number]
  size: TRecipeCardSize
}

export function RecipeCardMetaBadges({ recipe, size }: Props) {
  const badges = [
    { label: 'Main dish' },
    { label: `${recipe.calories}kcal`, Icon: Flame },
    { label: `${recipe.cookingTime}min`, Icon: Clock4 }
  ]

  const limit = size === 'sm' ? 2 : 3
  const visible = badges.slice(0, limit)
  const hidden = badges.length - limit

  return (
    <div className="mt-4 flex items-center gap-2">
      {visible.map(({ label, Icon }) => (
        <RecipeCardBadge
          key={label}
          Icon={Icon}
          size={size}
        >
          {label}
        </RecipeCardBadge>
      ))}
      {hidden > 0 && <RecipeCardBadge size={size}>+{hidden}</RecipeCardBadge>}
    </div>
  )
}
