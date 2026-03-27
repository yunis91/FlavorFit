import { ChefHat, CookingPot, Milk, MonitorCog, Pill } from 'lucide-react'

import { ISidebarMenuAccordionItem } from '@/shared/components/custom-ui/sidebar-menu-accordion/sidebar-menu-accordion.types'

export const recipeSidebarMenuData: ISidebarMenuAccordionItem[] = [
  {
    isInitiallyOpen: true,
    icon: CookingPot,
    name: 'Meal Types',
    items: [
      {
        value: 'Breakfast',
        label: 'Breakfast'
      },
      {
        value: 'Lunch',
        label: 'Lunch',
        badgeValue: '+1'
      },
      {
        value: 'Dinner',
        label: 'Dinner'
      },
      {
        value: 'Snack',
        label: 'Snack'
      },
      {
        value: 'Dessert',
        label: 'Dessert'
      },
      {
        value: 'Drink',
        label: 'Drink'
      }
    ]
  },
  {
    isInitiallyOpen: true,
    icon: Milk,
    name: 'Dietary Preferences',
    items: [
      {
        value: 'Vegetarian',
        label: 'Vegetarian'
      },
      {
        value: 'Low-Carb',
        label: 'Low-Carb',
        badgeValue: '+2'
      },
      {
        value: 'Gluten-Free',
        label: 'Gluten-Free'
      },
      {
        value: 'Keto',
        label: 'Keto'
      },
      {
        value: 'Dairy-Free',
        label: 'Dairy-Free'
      }
    ]
  },
  {
    icon: Pill,
    name: 'Health Goals',
    items: [
      {
        value: 'Weight Loss',
        label: 'Weight Loss'
      },
      {
        value: 'Muscle Gain',
        label: 'Muscle Gain'
      },
      {
        value: 'Heart Health',
        label: 'Heart Health'
      }
    ]
  },
  {
    icon: ChefHat,
    name: 'Cuisine',
    items: [
      {
        value: 'Russian',
        label: 'Russian'
      },
      {
        value: 'Italian',
        label: 'Italian'
      },
      {
        value: 'Chinese',
        label: 'Chinese'
      },
      {
        value: 'Mexican',
        label: 'Mexican'
      },
      {
        value: 'Indian',
        label: 'Indian'
      },
      {
        value: 'French',
        label: 'French'
      }
    ]
  },
  {
    icon: MonitorCog,
    name: 'Special Occasions',
    items: [
      {
        value: 'Holiday',
        label: 'Holiday'
      },
      {
        value: 'Anniversary',
        label: 'Anniversary'
      },
      {
        value: 'Wedding',
        label: 'Wedding'
      },
      {
        value: 'Party',
        label: 'Party'
      }
    ]
  }
]
