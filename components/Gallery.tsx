import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-24 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Image src="/Cappuccino-Coffee4.avif" width={200} height={200} alt="coffee" />
        <Image src="/burger2.jpg" width={200} height={200} alt="burger" />
        <Image src="/pasta6.avif" width={200} height={200} alt="pasta" />
      </div>
    </section>
  );
}
