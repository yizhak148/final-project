import { useLoaderData } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { WishlistContext } from "./dashboard";
import "./App.css";
export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export async function ProductLoader() {
  const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
  return res.data;
}


const App = () => {
  const prodact=useLoaderData() as Product[];
  const [cart, setCart] = useState<string[]>([]);
  const { addToWishlist } = useContext(WishlistContext);

  const addtocart = (id: string) => {
    setCart([...cart, id]);
  };

  return (
    <>
    
    <div>
      <a href="">dashboard</a>
      <a href=""></a>
    </div>
    <div className="parent-item">
      {prodact.map((product: Product) => (
        <div key={product.id} className="item">
          <h2 className="item-title">{product.title}</h2 >
          <p>Price: ${product.price}</p>
          <img src={product.image} alt="" className="item-image" />
          {/* {product.image &&
            Array.isArray(product.image) &&
            product.image.length > 0 && (
              <img src={product.image[0]} alt={product.title} />
            )} */}
          <button onClick={() => addtocart(product.id)}>Add to Cart</button>
          <button onClick={() => addToWishlist(product)}>⭐</button>
        </div>
      ))}
    </div>
    </>
  );
};

export function Loading() {
  return <p>Loading...</p>;
}

export default App;

