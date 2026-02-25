import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Nutrition',
  ...NO_INDEX_PAGE
}

export default function NutritionPage() {
  return <div>Nutrition</div>
}
