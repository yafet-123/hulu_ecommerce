import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";
import { AiFillPhone, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'

export default function Display({item}) {
  const [paddingTop, setPaddingTop] = useState("0");
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/profile')
  }
  return (
    <div className="flex flex-col lg:flex-row w-full h-full mb-10">
      <div className="w-full lg:w-[60%] px-5">
        <div className="w-full !h-[30rem] relative mb-5">
          <Image
            src={item.Image[0]}
            fill
            objectFit="contain"
            onLoad={({ target }) => {
              const { naturalWidth, naturalHeight } = target;
              setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
            }}
            alt="latest news image"
          />
        </div>
      </div>

      <div className="px-5 w-full lg:w-[40%]">
        <h1 className="text-black text-left font-poppins font-bold text-xl lg:text-3xl text-[#D0DFFF] ">
          {item.name}
        </h1>
        <p className="flex font-poppins font-semibold text-lg lg:text-2xl font-normal text-left text-[#505e66] my-3">
          {item.price} <span className="px-1">ETB</span>
        </p>
        <div className="flex flex-col mb-5">
          <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-2xl pb-5">Seller</h1>
          <h1 className="flex items-center text-black text-left font-poppins font-normal text-lg lg:text-xl pb-5 pl-5">
            <span className="text-xs lg:text-lg pr-3"><AiOutlineUser /></span>
            {item.User.UserName}
          </h1>
          <p className="flex items-center text-black flex font-poppins font-normal text-lg lg:text-xl font-normal text-left pb-5 pl-5">
            <span className="text-xs lg:text-lg pr-3"><AiFillPhone /></span>
            {item.User.phonenumber}
          </p>
          <p className="flex items-center text-black flex font-poppins font-normal text-lg lg:text-xl font-normal text-left pl-5">
            <span className="text-xs lg:text-lg pr-3"><AiOutlineMail /></span>
            {item.User.email}
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

