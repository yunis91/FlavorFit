import { ChefHat, CookingPot, Milk, MonitorCog, Pill } from 'lucide-react'

import { TRecipeFilters } from '@/features/recipes/recipes-sidebar/recipe-sidebar-menu.types'

import { ISidebarMenuAccordionItem } from '@/shared/components/custom-ui/sidebar-menu-accordion/sidebar-menu-accordion.types'

import {
  Cuisine,
  DietaryPreference,
  HealthGoal,
  MealType
} from '@/__generated__/graphql'

export const recipeSidebarMenuData: ISidebarMenuAccordionItem<
  keyof TRecipeFilters
>[] = [
  {
    isInitiallyOpen: true,
    icon: CookingPot,
    name: 'Meal Types',
    key: 'mealType',
    items: [
      {
        label: 'Breakfast',
        value: MealType.Breakfast
      },
      {
        label: 'Lunch',
        value: MealType.Lunch,
        badgeValue: '+1'
      },
      {
        label: 'Dinner',
        value: MealType.Dinner
      },
      {
        label: 'Snack',
        value: MealType.Snack
      },
      {
        label: 'Dessert',
        value: MealType.Dessert
      },
      {
        label: 'Drink',
        value: MealType.Drinks
      }
    ]
  },
  {
    isInitiallyOpen: true,
    icon: Milk,
    name: 'Dietary Preferences',
    key: 'dietaryPreference',
    items: [
      {
        label: 'Vegetarian',
        value: DietaryPreference.Vegetarian
      },
      {
        label: 'Low-Carb',
        value: DietaryPreference.LowCarb,
        badgeValue: '+2'
      },
      {
        label: 'Gluten-Free',
        value: DietaryPreference.GlutenFree
      },
      {
        label: 'Keto',
        value: DietaryPreference.Keto
      },
      {
        label: 'Dairy-Free',
        value: DietaryPreference.DairyFree
      }
    ]
  },
  {
    icon: Pill,
    name: 'Health Goals',
    key: 'healthGoal',
    items: [
      {
        label: 'Weight Loss',
        value: HealthGoal.WeightLoss
      },
      {
        label: 'Muscle Gain',
        value: HealthGoal.MuscleGain
      },
      {
        label: 'Heart Health',
        value: HealthGoal.HeartHealth
      }
    ]
  },
  {
    icon: ChefHat,
    name: 'Cuisine',
    key: 'cuisine',
    items: [
      {
        label: 'Russian',
        value: Cuisine.Russian
      },
      {
        label: 'Italian',
        value: Cuisine.Italian
      },
      {
        label: 'Chinese',
        value: Cuisine.Chinese
      },
      {
        label: 'Mexican',
        value: Cuisine.Mexican
      },
      {
        label: 'Indian',
        value: Cuisine.Indian
      },
      {
        label: 'French',
        value: Cuisine.French
      }
    ]
  },
  {
    icon: MonitorCog,
    name: 'Special Occasions',
    key: 'specialOccasion',
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
