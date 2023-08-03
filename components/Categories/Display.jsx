import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Display({ categorie }) {
  return (
    <Link href="/ " className="flex flex-col justify-between lg:pb-10">
      <h1>{categorie.name}</h1>
    </Link>
  );
}
