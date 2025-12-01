'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number, quantity?: number) => void
  removeFromCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number, quantity = 1) {
    if (quantity <= 0) return

    setCartItems((state) => {
      console.log('adicionando', productId, quantity)
      console.log('estado atual', state)
      const productInCart = state.find((item) => item.productId === productId)

      if (productInCart) {
        console.log('entrou')
        return state.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...state, { productId, quantity }]
    })
  }

  function removeFromCart(productId: number) {
    setCartItems((state) =>
      state.filter((item) => item.productId !== productId),
    )
  }

  return (
    <CartContext.Provider
      value={{ items: cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
