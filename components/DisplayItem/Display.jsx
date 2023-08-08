import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";

export default function Display() {
  const [paddingTop, setPaddingTop] = useState("0");
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/profile')
  }
  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="w-[60%] px-5">
        <div className="w-full !h-[30rem] relative mb-5">
          <Image
            src="https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976317/Ecommerce/b579db6a-dd47-4f82-82dd-bd3848353eff_hc6381.jpg"
            fill
            className="bg-cover w-full h-full"
            alt="latest news image"
          />
        </div>
      </div>

      <div className="px-5 w-[40%]">
        <h1 className="text-black text-left font-poppins font-bold text-xl lg:text-3xl text-[#D0DFFF] ">
          Iphone 14 Pro Max
        </h1>
        <p className="flex font-poppins font-semibold text-lg lg:text-2xl font-normal text-left text-[#505e66] my-3">
          30000 <span className="px-1">ETB</span>
        </p>
        <div className="flex flex-col mb-5">
          <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-2xl pb-5">Seller</h1>
          <h1 className="text-black text-left font-poppins font-normal text-lg lg:text-xl pb-5 pl-5">
            Yafet Addisu
          </h1>
          <p className="text-black flex font-poppins font-normal text-lg lg:text-xl font-normal text-left pl-5">
            +251934781038
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-2xl pb-5">Descreption</h1>
          <p className="text-black flex font-poppins font-normal text-lg lg:text-xl font-normal text-left pl-5">
            yafet is addisu is my name
          </p>
        </div>
      </div>
    </div>
  );
}

