import { BookHeart, BookMarked } from 'lucide-react'

import { RecipeCarousel } from '@/features/recipe-carousel/RecipeCarousel'

interface Props {}

export function RecipesCatalog({}: Props) {
  return (
    <div>
      <RecipeCarousel
        Icon={BookHeart}
        title="Recommended"
      />
      <RecipeCarousel
        Icon={BookMarked}
        title="Popular"
      />
    </div>
  )
}
