import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-slateBlue text-white flex items-center p-2">
      <img
        src="hrLogo.png"
        alt="talent thrive hr"
        className="h-20 w-20 rounded-full"
      />

      <Navbar />
    </header>
  );
}
