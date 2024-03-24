import Image from "next/image";
import Link from "next/link";

interface CategoryLinkProps {
  category: string;
}

export const CategoryLink: React.FC<CategoryLinkProps> = ({ category }) => {
  return (
    <Link href={`/category/${category}`} className="flex">
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={`/${category}.jpg`}
          alt={`${category}`}
          height={90}
          width={90}
          className="rounded-full"
        />
        <h3 className="font-medium capitalize">{category}</h3>
      </div>
    </Link>
  );
};
