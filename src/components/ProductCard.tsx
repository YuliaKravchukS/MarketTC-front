import { API_URL } from "../constants/index";
import { ProductResult } from "@/types";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: ProductResult }) => {
  return (
    <div className=' product-card  w-[191px]  h-[280px] bg-white shadow-md hover:shadow-hmd rounded-[10px] liner-gradient p-1 text-center  '>
      <div className='relative px-[3.5px]'>
        <Image
          className='block w-[176px] h-[192px]'
          src={`${API_URL}/${product.mainImage}`}
          alt=''
          width={176}
          height={192}
        />
        <Image
          className='absolute top-[11px] right-[9px] heart-img h-[20px]'
          src='/icons/heart.svg'
          width={22}
          height={20}
          alt=''
        />
      </div>

      <div className='mt-3 mb-2'>{product.title}</div>
      <div className=' flex h-[40px] justify-between items-end'>
        <div className='pt-2 pb-1'>{product.price}</div>
        <div className='product-card__btn-cart p-2.5 pb-2'>
          <Image src='/icons/cart.svg' width={20} height={20} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
