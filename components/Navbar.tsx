export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white">
      <h1 className="text-2xl font-bold"><a href="#">CaféHouse</a></h1>

      <div className="flex gap-8 text-lg">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Order</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
