import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => (
  <div className="flex justify-between items-center px-4 md:px-5 lg:px-10 py-4 bg-green">
    <div className="flex gap-8 items-center">
      <Link href="/" className="text-lg font-medium">
        Jenny's Kitchen
      </Link>
      <div className="flex gap-4">
        <Link href="/recipes" className="text-xs font-medium">
          All recipes
        </Link>
        <Link href="/" className="text-xs font-medium hidden lg:flex">
          Breakfast
        </Link>
        <Link href="/" className="text-xs font-medium hidden lg:flex">
          Soups
        </Link>
        <Link href="/" className="text-xs font-medium hidden lg:flex">
          Salads
        </Link>
        <Link href="/" className="text-xs font-medium hidden lg:flex">
          Dinners
        </Link>
        <Link href="/" className="text-xs font-medium hidden lg:flex">
          Desserts
        </Link>
        <Link href="/" className="text-xs font-medium hidden lg:flex">
          Snacks
        </Link>
      </div>
    </div>
    <Link
      href="/favorites"
      className="flex gap-2 bg-pink px-3 py-2 rounded items-center text-white"
    >
      <FaRegHeart size={20} />
      <p className="font-semibold hidden md:flex">Favorites</p>
    </Link>
  </div>
);
