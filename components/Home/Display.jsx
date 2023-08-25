import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";

export default function Display({ sale }) {
  const [paddingTop, setPaddingTop] = useState("0");
  const router = useRouter()
  console.log(sale)
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/profile')
  }
  return (
    <Link href="/Item/Display" className="flex flex-col justify-between lg:pb-10">
      <div className="w-full !h-[15rem] relative mb-5">
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
      <div className="flex justify-between w-full lg:px-5">
        <div className="flex flex-col items-left font-serif antialiased leading-loose tracking-wide mr-20 w-full lg:w-[75%]">
          <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-xl text-[#D0DFFF] ">
            {sale.name}
          </h1>
          <p className="flex font-poppins text-md lg:text-lg font-normal text-left text-[#505e66] my-3">
            {sale.price} <span className="px-1">ETB</span>
          </p>
        </div>
        <button onClick={handleClick} className="flex flex-col items-center mr-5">
          <Image
            src={sale.profile}
            alt="Item images"
            priority
            width={40}
            height={40}
            className="h-[40px] bg-cover rounded-full"
          />

          <p className="flex font-poppins text-md lg:text-lg font-normal text-left text-[#505e66] my-2 w-full mr-5">
            {sale.posted}
          </p>
        </button>
      </div>
    </Link>
  );
}
