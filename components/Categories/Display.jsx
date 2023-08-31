import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Display({ categorie }) {
  return (
    <Link 
      href={{
        pathname: '/categories',
        query: { name: categorie.CategoryName },
      }} 
      className="flex flex-col justify-between pb-5"
    >
      <p className="flex font-poppins text-md lg:text-lg font-normal text-left text-[#505e66] lg:pl-5">{categorie.CategoryName}</p>
    </Link>
  );
}
