import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

export function RecipesCatalogLoader() {
  return (
    <div>
      <div className="mb-6">
        <SkeletonLoader
          count={1}
          className="h-8 w-3xs"
        />
      </div>
      <div className="mb-4 flex items-center gap-4">
        <SkeletonLoader
          count={4}
          className="h-81.5 basis-[26%]"
        />
      </div>
      <div className="mb-6">
        <SkeletonLoader
          count={1}
          className="h-8 w-3xs"
        />
      </div>
      <div className="mb-4 flex items-center gap-4">
        <SkeletonLoader
          count={5}
          className="h-72.5 basis-[22%]"
        />
      </div>
    </div>
  )
}
