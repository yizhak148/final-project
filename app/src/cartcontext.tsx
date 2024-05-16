
import { createContext, useState, ReactNode, FC } from "react";
import { Product } from "./App";

type CartItemType = {
  id: string;
  title: string;
  price: number;
  image: string[];
};

type CartContextType = {
  cart: CartItemType[];
  addToCart: (product: CartItemType) => void;
  removeFromCart: (productId: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = (product: CartItemType) => {
    setCart((current) => [...current, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((current) => current.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

