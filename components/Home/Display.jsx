import Image from "next/image";
import Link from "next/link";

export default function Display({ sale }) {
  console.log(sale.Image)
  return (
    <Link href="/ " className="flex flex-col justify-between lg:pb-32">
      <div className="w-full !h-[20rem] relative mb-5">
        <Image
          src={sale.Image}
          fill
          className="w-full !h-full bg-cover bg-center"
          alt="latest news image"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col items-left font-serif antialiased leading-loose tracking-wide mr-20 w-full lg:w-[75%]">
          <h1 className="text-black text-left font-poppins font-semibold xs:leading-[30px] text-xl lg:text-2xl leading-[26px] tracking-[0.25%] text-[#D0DFFF] mb-1">
            {sale.name}
          </h1>
          <p className="flex font-poppins text-lg lg:text-xl xs:leading-[27px] leading-[23px] font-normal text-left text-[#505e66] mb-1">
            {sale.price} <span className="px-1">ETB</span>
          </p>
        </div>
        <Image
          src={sale.profile}
          width={50}
          height={50}
          className="w-full !h-full bg-cover bg-center"
          alt="latest news image"
        />
      </div>
    </Link>
  );
}
