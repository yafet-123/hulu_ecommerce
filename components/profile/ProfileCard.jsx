import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="flex flex-col justify-center items-center lg:pb-20">
        <Image
          src="https://res.cloudinary.com/df7hlpjcj/image/upload/v1690978117/Ecommerce/photo-1438761681033-6461ffad8d80_qvkvak.jpg"
          priority
          width={200}
          height={200}
          className="h-[200px] bg-cover rounded-full"
        />
        <p className="font-poppins text-xl lg:text-3xl font-normal text-center text-[#505e66] my-5 w-full">
          Yafet Addisu
        </p>
    </div>
  );
}
