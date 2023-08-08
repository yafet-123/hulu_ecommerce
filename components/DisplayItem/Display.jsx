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
  const Images = [
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
    "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg"
    ]
  return (
    <div className="flex flex-col lg:flex-row w-full h-full mb-10">
      <div className="w-[60%] px-5">
        <div className="w-full !h-[30rem] relative mb-5">
          <Image
            src={Images[0]}
            fill
            className="bg-cover w-full h-full"
            alt="imagea of the items"
          />
        </div>
        <div className="flex flex-wrap flex-row ">
          {Images.map((data, index) => (
            <Image
              src={data}
              width={100}
              height={100}
              className="p-5"
              alt="imagea of the items"
            />
          ))}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. 
            Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. 
            Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
            Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. 
            In adipiscing ultrices tellus, in suscipit massa vehicula eu.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. 
            Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. 
            Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
            Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. 
            In adipiscing ultrices tellus, in suscipit massa vehicula eu.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. 
            Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. 
            Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
            Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. 
            In adipiscing ultrices tellus, in suscipit massa vehicula eu.
          </p>
        </div>
      </div>
    </div>
  );
}

