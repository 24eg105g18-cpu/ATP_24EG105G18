function Navbar() {
  return (
    <div className="flex justify-between items-center bg-slate-800 text-white p-4">
      <h1 className="text-xl font-bold">Logo</h1>
      <ul className="flex gap-6">
        <li><a href="#">Home</a></li>
        <li><a href="#">Register</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  );
}
export default Navbar;