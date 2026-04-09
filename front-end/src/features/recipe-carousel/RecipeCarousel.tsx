import { LucideIcon } from 'lucide-react'

import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'
import { RecipeCard } from '@/shared/components/custom-ui/recipe-card/RecipeCard'
import { TRecipeCardSize } from '@/shared/components/custom-ui/recipe-card/types/recipe-card.types'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/shared/components/ui/carousel'
import { ScrollArea, ScrollBar } from '@/shared/components/ui/scroll-area'

import { GetRecipesQuery } from '@/__generated__/graphql'

interface Props {
  Icon: LucideIcon
  title: string
  size: TRecipeCardSize
  recipes: GetRecipesQuery['recipes']
}

export function RecipeCarousel({ Icon, title, size, recipes }: Props) {
  return (
    <div className="mb-6">
      <HeadingWithIcon
        className="mb-4"
        Icon={Icon}
      >
        {title}
      </HeadingWithIcon>

      {/*<ScrollArea className="whitespace-nowrap">
        <div className="flex w-max space-x-4 pb-4">
          {recipes.map(recipe => (
            <div
              key={recipe.slug}
              className={
                size === 'sm' ? 'max-w-60 shrink-0' : 'max-w-80 shrink-0'
              }
            >
              <RecipeCard
                recipe={recipe}
                size={size}
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>*/}
      <Carousel>
        <CarouselContent>
          {recipes.map(recipe => (
            <CarouselItem
              key={recipe.slug}
              className={size === 'sm' ? 'basis-[22%]' : 'basis-[26%]'}
            >
              <RecipeCard
                recipe={recipe}
                size={size}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
