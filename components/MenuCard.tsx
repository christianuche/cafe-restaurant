"use client";

export default function MenuCard({ item, addToCart }) {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden">
      <img src={item.image} className="w-full h-52 object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-bold">{item.name}</h3>

        <p className="mb-4">${item.price}</p>

        <button
          onClick={() => addToCart(item)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
