import { useCallback } from 'react'

import {
  GetRecipesQuery,
  GetRecipesQueryVariables,
  RecipeSort,
  RecipesQueryInput
} from '@/__generated__/graphql'

interface Props {
  fetchMore: (options: {
    variables: GetRecipesQueryVariables
    updateQuery: (
      previousQueryResult: GetRecipesQuery,
      options: { fetchMoreResult?: GetRecipesQuery }
    ) => GetRecipesQuery
  }) => Promise<unknown>
  page: number
  setPage: (page: number) => void
  input: RecipesQueryInput
  sort: RecipeSort
  hasMore?: boolean
  isFetchingMore: boolean
}

export function useFetchMoreRecipes({
  fetchMore,
  page,
  setPage,
  input,
  sort,
  hasMore,
  isFetchingMore
}: Props) {
  const loadMore = useCallback(async () => {
    if (isFetchingMore || !hasMore) return

    const nextPage = page + 1

    await fetchMore({
      variables: {
        input: {
          ...input,
          page: nextPage,
          sort
        }
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev

        setPage(nextPage)

        return {
          ...prev,
          recipes: {
            ...fetchMoreResult.recipes,
            items: [...prev.recipes.items, ...fetchMoreResult.recipes.items]
          }
        }
      }
    })
  }, [fetchMore, hasMore, page, sort, setPage, input, isFetchingMore])

  return { loadMore }
}
