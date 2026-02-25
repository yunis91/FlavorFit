import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Meal Plans',
  ...NO_INDEX_PAGE
}

export default function MealPlansPage() {
  return <div>Meal Plans</div>
}
