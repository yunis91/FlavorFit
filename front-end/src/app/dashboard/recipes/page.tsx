import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Recipes',
  ...NO_INDEX_PAGE
}

export default function RecipesPage() {
  return <div>Recipes</div>
}
