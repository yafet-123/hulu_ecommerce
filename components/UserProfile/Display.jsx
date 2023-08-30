import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Display({ sale }) {
  const [paddingTop, setPaddingTop] = useState("0");
  const { status, data: session } = useSession();
  const router = useRouter()
  const handleUpdate = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/user/update/item',
      query: { item_id: sale.items_id },
    })
  }

  const handledelete = async (e) => {
    e.preventDefault()
    const hasConfirmed = confirm(
      "Are you sure you want to delete this Item?"
    );
    if (hasConfirmed) {
        const data = await axios.delete(`../../api/Item/delete/${sale.items_id}`,{
          }).then(function (response) {
              console.log(response.data);
              router.reload()
          }).catch(function (error) {
              console.log(error);
          });
    }
  }

  return (
    <Link href="/ " className="flex flex-col justify-between lg:pb-10">
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
            {sale.CreatedDate}
          </p>
        </div>
      </div>

      {session?.user.id === sale.user_id && (
        <div className='mt-5 flex justify-between items-center gap-4 border-t border-gray-100 pt-3 px-10'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleUpdate}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handledelete}
          >
            Delete
          </p>
        </div>
      )}
    </Link>
  );
}
