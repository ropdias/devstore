import { Suspense } from 'react'

import { Skeleton } from '@/components/skeleton'

import { ProductBeingSearch } from './product-being-search'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:{' '}
        <Suspense>
          <ProductBeingSearch />
        </Suspense>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  )
}
