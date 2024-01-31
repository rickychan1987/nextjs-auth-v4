import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/auth"} className="flex gap-2 flex-center">
        <Image
          src="/assets/images/paradise-logo.jpg"
          alt="Paradise Logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <p className="font-satoshi font-semibold text-lg text-black tracking-wide">
          Paradise TechHub - SSL-Status
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
