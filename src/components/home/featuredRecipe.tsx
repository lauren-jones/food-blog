import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

interface FeaturedRecipeProps {}

export const FeaturedRecipe: React.FC<FeaturedRecipeProps> = (props) => {
  return (
    <div className="max-w-[1280px] px-[80px] flex items-center">
      <div className="w-full h-[365px] bg-peach"></div>
      <div className="flex flex-col gap-8 px-10 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="text-sm font-medium bg-peach px-2 py-1 rounded flex justify-center items-center">
              Breakfast
            </div>
            <div className="text-sm font-medium bg-peach px-2 py-1 rounded flex justify-center items-center">
              Snacks
            </div>
            <FaRegHeart size={20} className="text-pink" />
          </div>
          <h2 className={`text-4xl font-medium`}>
            Homemade waffles with cherries
          </h2>
          <p className="font-normal">
            Bursting with juicy cherries and boasting a delicate texture, these
            waffles are a delightful fusion of sweet and satisfying.
          </p>
        </div>
        <div className="flex gap-4">
          <Image
            src="/profile.jpg"
            alt="Jenny Lemon"
            height={37}
            width={37}
            className="rounded-full"
          />
          <div className="flex flex-col h-[42px] justify-between">
            <p className="text-sm font-medium uppercase">Jenny Lemon</p>
            <p className="text-xs">May 24, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
