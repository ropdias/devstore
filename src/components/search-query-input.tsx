'use client'
import { useSearchParams } from 'next/navigation'

export function SearchQueryInput() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q') || ''

  return (
    <input
      name="q"
      defaultValue={query}
      placeholder="Buscar produtos..."
      className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
    />
  )
}
