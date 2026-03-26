import type { Metadata } from 'next'

import RecipeDetails from '@/features/recipe/RecipeDetails'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Recipe Details' }
}

export default function Page() {
  return <RecipeDetails />
}
