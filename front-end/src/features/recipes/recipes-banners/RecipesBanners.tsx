import { Plus, Utensils } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/shared/components/ui/button'

export function RecipesBanners() {
  return (
    <div className="grid grid-cols-[2.5fr_1fr] gap-5">
      <div className="relative rounded-2xl bg-linear-to-r from-[#8E73F8] to-[#9E86FF] px-8 py-4 text-white">
        <div className="absolute bottom-0 -left-4">
          <Image
            src="/images/graphics/burger.png"
            alt="Burger"
            width={170}
            height={140}
            className="h-auto w-42"
            draggable={false}
            priority
          />
        </div>

        <div className="ml-36 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h2 className="text-4xl leading-none font-black tracking-[-0.02em] italic">
              Got a Recipe That Rocks?
            </h2>

            <p className="mt-2 text-sm text-white/80">
              Share It &amp; Shine! Your recipe might just become the next big
              hit.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Gain Recognition',
                'Increase Sales',
                'Showcase Your Skills'
              ].map(item => (
                <span
                  key={item}
                  className="rounded-md bg-white/12 px-3 py-1 text-sm font-medium backdrop-blur-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Button
            variant="soft"
            type="button"
            className="shrink-0 rounded-2xl bg-white px-5 text-black hover:bg-white/90 hover:text-black"
          >
            <Plus />
            Add Recipe
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl bg-white px-5 py-4">
        <div className="flex items-center gap-2 text-lg font-semibold text-black">
          <Utensils
            size={20}
            className="opacity-60"
          />
          <span>Your Recipes</span>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div className="flex items-end gap-2">
            <span className="text-4xl leading-none font-black tracking-[-0.04em] italic">
              12
            </span>
            <span className="text-black/60">Created</span>
          </div>

          <div className="flex -space-x-3">
            {[
              '/images/avatar-placeholder.png',
              '/images/avatar-placeholder.png',
              '/images/avatar-placeholder.png',
              '/images/avatar-placeholder.png'
            ].map((src, index) => (
              <div
                key={src + index}
                className="relative size-9 overflow-hidden rounded-full border-2 border-white bg-white"
              >
                <Image
                  src={src}
                  alt={`Recipe author ${index + 1}`}
                  className="object-cover"
                  draggable={false}
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
