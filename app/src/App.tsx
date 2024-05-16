import { useLoaderData } from "react-router";
import { useState, FC, useContext } from "react";
import axios from "axios";
import { WishlistContext } from "./dashboard";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string[];
};

export async function ProductLoader() {
  const res = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products");
  return res.data;
}


const App: FC = () => {
  const products: Product[] = useLoaderData<Product[]>();
  const [cart, setCart] = useState<string[]>([]);
  const { addToWishlist } = useContext(WishlistContext);

  const addtocart = (id: string) => {
    setCart([...cart, id]);
  };

  return (
    <div>
      {products.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          {product.image &&
            Array.isArray(product.image) &&
            product.image.length > 0 && (
              <img src={product.image[0]} alt={product.title} />
            )}
          <button onClick={() => addtocart(product.id)}>Add to Cart</button>
          <button onClick={() => addToWishlist(product)}>⭐</button>
        </div>
      ))}
    </div>
  );
};

export function Loading() {
  return <p>Loading...</p>;
}

export default App;

