import { Category } from "./types";
import Image from "next/image";
// import image from "../images/150.png";
import { BACKEND_URL } from "@/lib/fetchAllCategories";

export interface Result {
  id: number;
  title: string;
  image: string;
}
type ProductItemProps = {
  product: Result;
};

const CategoryItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className='w-full flex flex-col justify-between items-center cursor-pointer'>
      <div className='w-[278px] h-[260px]'>
        <Image
          className='object-cover w-full h-full'
          src={`${BACKEND_URL}/${product.image}`}
          alt={product.title}
          width={278}
          height={260}
        />
      </div>
      <p>{product.title}</p>
    </div>
  );
};

export default CategoryItem;
