import { cva } from 'class-variance-authority'

export const recipeCardVariants = cva('bg-white rounded-2xl', {
  variants: {
    size: {
      default: 'p-4',
      sm: 'p-3.5'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export const recipeCardBadgeVariants = cva(
  'flex items-center gap-1 rounded-2xl text-xs font-medium bg-gray-400 text-black/70',
  {
    variants: {
      size: {
        default: 'h-9 px-3 text-base',
        sm: 'h-8 px-2 text-sm'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardImageVariants = cva(
  'relative w-full overflow-hidden rounded-2xl',
  {
    variants: {
      size: {
        default: 'aspect-[1.45/1]',
        sm: 'aspect-[1.42/1]'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardTitleVariants = cva(
  'line-clamp-1 font-semibold tracking-tight text-black',
  {
    variants: {
      size: {
        default: 'text-2xl',
        sm: 'text-xl'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardDescriptionVariants = cva(
  'line-clamp-3 text-sm text-black/55',
  {
    variants: {
      size: {
        default: 'text-base mt-2 leading-6',
        sm: 'text-sm mt-1.5 leading-5'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardFooterVariants = cva(
  'flex items-center gap-1.5 text-medium text-black/45',
  {
    variants: {
      size: {
        default: 'text-sm',
        sm: 'text-xs'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardDifficultBadgeVariants = cva(
  'flex items-center gap-1.5 rounded-2xl text-xs font-semibold',
  {
    variants: {
      tone: {
        EASY: 'bg-emerald-100 text-emerald-600',
        MEDIUM: 'bg-amber-100 text-amber-600',
        HARD: 'bg-red-100 text-red-500'
      },
      size: {
        default: 'text-base',
        sm: 'text-sm'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)
