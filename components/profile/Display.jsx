import Image from "next/image";
import Link from "next/link";

export default function Display({ sale }) {
  console.log(sale.Image)
  return (
    <Link href="/ " className="flex flex-col justify-between lg:pb-10">
      <div className="w-full !h-[20rem] relative mb-5">
        <Image
          src={sale.Image}
          fill
          className="w-full !h-full bg-cover bg-center"
          alt="profile image"
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
            {sale.posted}
          </p>
        </div>
      </div>
    </Link>
  );
}
