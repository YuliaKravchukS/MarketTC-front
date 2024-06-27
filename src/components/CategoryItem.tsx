import { Category } from "./types";
import Image from "next/image";
import image from "../images/150.png";
type ProductItemProps = {
  product: Category;
};

const CategoryItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className='w-full flex flex-col justify-between items-center'>
      <div className='w-[278px] h-[260px]'>
        <Image
          className='object-cover w-full h-full'
          src={image}
          alt={product.name}
          width={278}
          height={260}
        />
        <svg>
          <use href=''></use>
        </svg>
      </div>
      <p>{product.name}</p>
    </div>
  );
};

export default CategoryItem;
