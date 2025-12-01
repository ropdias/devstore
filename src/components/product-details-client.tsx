'use client'

import { useState } from 'react'

import { Product } from '@/data/types/product'

import { AddToCartButton } from './add-to-cart-button'

interface Props {
  product: Product
}

export function ProductDetailsClient({ product }: Props) {
  const [size, setSize] = useState('P')
  const sizes = ['P', 'M', 'G', 'GG']

  return (
    <div className="flex flex-col justify-center px-12">
      <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
      <p className="mt-2 leading-relaxed text-zinc-400">
        {product.description}
      </p>
      <div className="mt-8 flex items-center gap-3">
        <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
        <span className="text-sm text-zinc-400">
          Em até 12x s/ juros de{' '}
          {(product.price / 12).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>

      <div className="mt-8 space-y-4">
        <span className="block font-semibold">Tamanhos</span>
        <div className="flex gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`flex h-9 w-14 items-center justify-center rounded-full border px-2 text-sm font-semibold ${
                size === s
                  ? 'border-violet-500 bg-violet-500 text-black'
                  : 'border-zinc-700 bg-zinc-800 text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <AddToCartButton productId={product.id} />
    </div>
  )
}
