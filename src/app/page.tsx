import { Categories } from "@/components/home/categories";
import { FeaturedRecipe } from "@/components/home/featuredRecipe";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center">
      <FeaturedRecipe />
      <Categories />
      <div className="flex w-full max-w-[1280px] px-[80px]">
        <div className="flex flex-col gap-4 w-full">
          <div className="h-[325px] w-[265px] bg-peach"></div>
          <div></div>
          <h3 className="text-xl font-semibold">
            American pancakes with cherry sauce
          </h3>
        </div>
      </div>
    </main>
  );
}
