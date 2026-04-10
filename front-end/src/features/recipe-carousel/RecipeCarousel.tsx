import { LucideIcon } from 'lucide-react'
import { memo, useState } from 'react'

import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'
import { RecipeCard } from '@/shared/components/custom-ui/recipe-card/RecipeCard'
import { TRecipeCardSize } from '@/shared/components/custom-ui/recipe-card/types/recipe-card.types'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/shared/components/ui/carousel'
import { ScrollArea, ScrollBar } from '@/shared/components/ui/scroll-area'

import { GetRecipesQuery } from '@/__generated__/graphql'

import { useCarouselInfiniteScroll } from '../recipes/hooks/useCarouselInfiniteScroll'

import { RecipeCarouselLoadMoreLoader } from './RecipeCarouselLoadMoreLoader'
import { cn } from '@/shared/utils'

interface Props {
  Icon: LucideIcon
  title: string
  size: TRecipeCardSize
  recipes: GetRecipesQuery['recipes']['items']
  hasMore?: boolean
  isFetchingMore?: boolean
  onLoadMore?: () => void | Promise<void>
}

export const RecipeCarousel = memo(function RecipeCarousel({
  Icon,
  title,
  size,
  recipes,
  hasMore,
  isFetchingMore = false,
  onLoadMore
}: Props) {
  const [api, setApi] = useState<CarouselApi>()

  useCarouselInfiniteScroll({
    api,
    hasMore,
    isFetchingMore,
    onLoadMore: async () => {
      if (!onLoadMore) return
      await onLoadMore()
    }
  })

  return (
    <div className="mb-6">
      <HeadingWithIcon
        className="mb-4"
        Icon={Icon}
      >
        {title}
      </HeadingWithIcon>

      {/*<ScrollArea className="whitespace-nowrap">
        <div className="flex w-max space-x-4 p-5">
          {recipes.map(recipe => (
            <div
              key={recipe.slug}
              className={cn(
                'group transition-transform duration-300 will-change-transform hover:scale-[1.02]',
                size === 'sm' ? 'max-w-60 shrink-0' : 'max-w-80 shrink-0',
                size === 'sm' ? 'hover:-rotate-3' : 'hover:rotate-3'
              )}
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
      <Carousel setApi={setApi}>
        <CarouselContent className="-mx-5 p-5">
          {recipes.map(recipe => (
            <CarouselItem
              key={recipe.slug}
              className={cn(
                'group transition-transform duration-300 will-change-transform hover:scale-[1.02]',
                size === 'sm' ? 'basis-[22%]' : 'basis-[26%]',
                size === 'sm' ? 'hover:-rotate-3' : 'hover:rotate-3'
              )}
            >
              <RecipeCard
                recipe={recipe}
                size={size}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {isFetchingMore && (
        <div className="mt-4">
          <RecipeCarouselLoadMoreLoader size={size} />
        </div>
      )}
    </div>
  )
})
