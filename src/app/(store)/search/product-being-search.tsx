'use client'
import { useSearchParams } from 'next/navigation'

export function ProductBeingSearch() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return <span className="font-semibold">{query}</span>
}
