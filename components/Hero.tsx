import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image src="/Cafe-Hero.webp" alt="Cafe" fill className="object-cover" />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-6xl font-bold mb-6">Coffee • Food • Community</h1>

        <p className="text-xl mb-6">Fresh meals and handcrafted coffee</p>

        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold">
          Order Now
        </button>
      </div>
    </section>
  );
}
