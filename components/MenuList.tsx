"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";
import { menuItems } from "./menuData";

export default function MenuList() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="grid md:grid-cols-3 gap-10">
      {menuItems.map((item) => (
        <MenuCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
}
