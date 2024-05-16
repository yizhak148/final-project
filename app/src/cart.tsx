import { useContext, useEffect, useState } from "react";
import { CartContext } from './cartcontext';


const Cart = () => {
  const { cart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(product => (
          <li key={product.id}>{product.title} - ${product.price}</li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default Cart;
