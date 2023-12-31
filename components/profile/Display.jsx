import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import moment from 'moment';

export default function Display({ sale }) {
  const [paddingTop, setPaddingTop] = useState("0");
  return (
    <Link
      href={{
        pathname: '/Item/Display',
        query: { id: sale.items_id },
      }}
      className="flex flex-col justify-between lg:pb-10">
      <div className="w-full !h-[20rem] relative mb-5">
        <Image
          src={sale.Image[0]}
          fill
          objectFit="contain"
          onLoad={({ target }) => {
            const { naturalWidth, naturalHeight } = target;
            setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
          }}
          alt="latest news image"
        />
      </div>
      <div className="flex justify-between w-full px-5">
        <div className="flex flex-col items-left font-serif antialiased leading-loose tracking-wide mr-20 w-full lg:w-[75%]">
          <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-xl text-[#D0DFFF] ">
            {sale.name}
          </h1>
         <p className="flex font-poppins text-md lg:text-lg font-normal text-left text-[#505e66] my-3">
            {sale.price} <span className="px-1">ETB</span>
          </p>
        </div>
        <div className="flex flex-col items-center mr-5">
          <p className="flex font-poppins text-md lg:text-lg font-normal text-left text-[#505e66] my-2 w-full mr-5">
            {moment(sale.ModifiedDate).utc().format('MMMM, Do YYYY')}
          </p>
        </div>
      </div>
    </Link>
  );
}
