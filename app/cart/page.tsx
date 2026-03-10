"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      {cart.map((item, index) => (
        <div key={index} className="flex justify-between mb-4">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-10">Total: ${total}</h2>
    </main>
  );
}
