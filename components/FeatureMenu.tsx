import Image from "next/image";

export default function FeaturedMenu() {
  return (
    <section className="py-24 px-10 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Menu</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="shadow-lg rounded-xl overflow-hidden">
          <Image src="/Cappuccino-Coffee2.avif" width={400} height={300} alt="coffee" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Cappuccino</h3>
            <p>$4.50</p>
          </div>
        </div>

        <div className="shadow-lg rounded-xl overflow-hidden">
          <Image src="/burger.jpg" width={400} height={300} alt="burger" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Cheese Burger</h3>
            <p>$8.00</p>
          </div>
        </div>

        <div className="shadow-lg rounded-xl overflow-hidden">
          <Image src="/pasta3.avif" width={400} height={300} alt="pasta" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Italian Pasta</h3>
            <p>$11.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
