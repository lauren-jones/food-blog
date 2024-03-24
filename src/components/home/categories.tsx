import { CategoryLink } from "./categoryLink";

interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className="bg-light-peach w-full flex flex-col gap-4 py-10 justify-center items-center">
      <h2 className="text-2xl font-medium">Categories</h2>
      <div className="flex gap-5">
        <CategoryLink category="breakfast" />
        <CategoryLink category="soups" />
        <CategoryLink category="salads" />
        <CategoryLink category="dinners" />
        <CategoryLink category="desserts" />
        <CategoryLink category="snacks" />
      </div>
    </div>
  );
};
