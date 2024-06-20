import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
  return (
    // <div className="min-w-[188px]  min-h-[280px] max-h-[280px] flex flex-col h-full items-center gap-3 px-1 pt-1.5 pb-2 bg-white shadow-md rounded-[10px] liner-gradient">
    //   <Image className="px-0.5" src="/images/rectangle.jpg" alt="" width={176} height={192} />
    //   <div className="text-center flex-col w-full h-[72px] justify-between">
    //     <div className="text-base ">Product </div>
    //     <div className="flex justify-between  items-end">
    //       <div>Price</div>
    //       <Image src="/icons/cart.svg" width={20} height={20} alt=""></Image>
    //     </div>
    //   </div>
    // </div>

    <div className=" product-card w-[188px] min-w-[188px] max-h-[280px] min-h-[280px]  bg-white shadow-md hover:shadow-hmd rounded-[10px] liner-gradient px-1 text-center pt-1 ">
      <div className="relative">
        <Image
          className=" px-0.5 block mx-auto"
          src="/images/rectangle.jpg"
          alt=""
          width={176}
          height={192}></Image>
        <Image
          className="absolute top-[11px] right-[9px]"
          src="/icons/heart.svg"
          width={20}
          height={20}
          alt=""
        />
      </div>

      <div className="mt-3 mb-2">Product name</div>
      <div className=" flex h-[40px] justify-between items-end">
        <div className="py-2">Price</div>
        <div className="product-card__btn-cart p-2.5">
          <Image src="/icons/cart.svg" width={20} height={20} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
