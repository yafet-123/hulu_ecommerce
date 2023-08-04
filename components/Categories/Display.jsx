import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Display({ categorie }) {
  return (
    <Link href="/ " className="flex flex-col justify-between lg:pb-10">
      <p className="flex font-poppins text-md lg:text-lg font-normal text-left text-[#505e66] my-3">{categorie.name}</p>
    </Link>
  );
}
