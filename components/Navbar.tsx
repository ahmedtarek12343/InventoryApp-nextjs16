import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="h-15 max-w-7xl mx-auto px-4 bg-transparent backdrop-blur-2xl sticky top-0">
        <nav className="h-full flex items-center justify-between">
          <div className="">
            <Image
              src="/next.svg"
              alt="logo"
              width={120}
              height={30}
              className="h-6 object-cover brightness-0 invert"
            />
          </div>
          <ul className="flex items-center gap-8">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Dashboard", href: "/dashboard" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
