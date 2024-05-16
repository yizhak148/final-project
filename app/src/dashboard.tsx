import { useContext, createContext, useState, FC, ReactNode } from 'react';
import { Product } from "./App";

type WishlistContextType = {
    wishlist: Product[];
    addToWishlist: (product: Product) => void;
};

export const WishlistContext = createContext<WishlistContextType>({
    wishlist: [],
    addToWishlist: () => {},
});

interface WishlistProviderProps {
    children: ReactNode;
}

export const WishlistProvider: FC<WishlistProviderProps> = ({ children }) => {
    const [wishlist, setWishlist] = useState<Product[]>([]);
  
    const addToWishlist = (product: Product) => {
      setWishlist(current => [...current, product]);
    };
  
    return (
      <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
        {children}
      </WishlistContext.Provider>
    );
};

const Wishlist: FC = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
