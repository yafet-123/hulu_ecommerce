import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="flex flex-col justify-center items-center lg:pb-20">
        <Image
          src="https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
          priority
          width={200}
          height={200}
          className="h-[200px] bg-cover rounded-full"
        />
        <p className="font-poppins text-xl lg:text-3xl font-normal text-center text-[#505e66] my-5 w-full">
          Name
        </p>
    </div>
  );
}
