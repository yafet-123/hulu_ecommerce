import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";

export default function Display({item}) {
  const [paddingTop, setPaddingTop] = useState("0");
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/profile')
  }
  // const Images = [
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
  //   "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg"
  //   ]
  return (
    <div className="flex flex-col lg:flex-row w-full h-full mb-10">
      <div className="w-[60%] px-5">
        <div className="w-full !h-[30rem] relative mb-5">
          <Image
            src={item.Image[0]}
            fill
            className="bg-cover w-full h-full"
            alt="imagea of the items"
          />
        </div>
        {/*<div className="flex flex-wrap flex-row ">
          {Images.map((data, index) => (
            <Image
              key={index}
              src={data}
              width={100}
              height={100}
              className="p-5"
              alt="imagea of the items"
            />
          ))}
        </div>*/}
      </div>

      <div className="px-5 w-[40%]">
        <h1 className="text-black text-left font-poppins font-bold text-xl lg:text-3xl text-[#D0DFFF] ">
          {item.name}
        </h1>
        <p className="flex font-poppins font-semibold text-lg lg:text-2xl font-normal text-left text-[#505e66] my-3">
          {item.price} <span className="px-1">ETB</span>
        </p>
        <div className="flex flex-col mb-5">
          <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-2xl pb-5">Seller</h1>
          <h1 className="text-black text-left font-poppins font-normal text-lg lg:text-xl pb-5 pl-5">
            {item.User.UserName}
          </h1>
          <p className="text-black flex font-poppins font-normal text-lg lg:text-xl font-normal text-left pl-5">
            {item.User.phonenumber}
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-2xl pb-5">Descreption</h1>
          <p className="text-black flex font-poppins font-normal text-lg lg:text-xl font-normal text-left pl-5">
            {item.Description}
          </p>
        </div>
      </div>
    </div>
  );
}

