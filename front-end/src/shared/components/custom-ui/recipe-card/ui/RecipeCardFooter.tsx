import { ChefHat, Eye, Heart } from 'lucide-react'

import { Difficulty } from '@/__generated__/graphql'

import {
  recipeCardDifficultBadgeVariants,
  recipeCardFooterVariants
} from '../styles/recipe-card.styles'
import { TRecipeCardSize } from '../types/recipe-card.types'

interface Props {
  views?: number
  likes?: number
  difficultyLevel: Difficulty
  size: TRecipeCardSize
}

export function RecipeCardFooter({
  views,
  likes,
  difficultyLevel,
  size
}: Props) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <div
        className={recipeCardDifficultBadgeVariants({
          tone: difficultyLevel,
          size
        })}
      >
        <ChefHat className={size === 'sm' ? 'size-3' : 'size-4'} />
        <span className="capitalize">{difficultyLevel}</span>
      </div>

      <div className={recipeCardFooterVariants({ size })}>
        <Heart className={size === 'sm' ? 'size-3' : 'size-4'} />
        <span className="capitalize">{likes}</span>
      </div>

      <div className={recipeCardFooterVariants({ size })}>
        <Eye className={size === 'sm' ? 'size-3' : 'size-4'} />
        <span className="capitalize">{views}</span>
      </div>
    </div>
  )
}
