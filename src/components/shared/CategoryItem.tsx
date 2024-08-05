import { API_URL } from '@/constants/index';
import { ProductItemProps } from '@/types/index.js';
import Image from 'next/image';

export const CategoryItem: React.FC<ProductItemProps> = ({ category }) => {
  return (
    <div className="w-full flex flex-col justify-between items-center cursor-pointer">
      <div className="w-[278px] h-[260px]">
        <Image
          className="object-cover w-full h-full"
          src={`${API_URL}${category.image}`}
          alt={category.title}
          width={278}
          height={260}
        />
      </div>
      <p>{category.title}</p>
    </div>
  );
};
