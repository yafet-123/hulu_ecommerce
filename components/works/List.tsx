import Image from "next/image";
import Link from "next/link";

export function List({ selectedWorks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-10">
      {selectedWorks.map((work, index) => (
        <Link
          href={{
            pathname: '/SelectedWorks/Display',
            query: { id: `${work.selectedWorks_id}` },
          }}
          className="text-white flex flex-col cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300 border shadow-2xl"
          key={work.selectedWorks_id}
        >
          <div className="relative h-[400px] w-full">
            <Image
              src={work.Image}
              alt="Slide"
              className="h-full w-full"
              layout="fill"
            />
          </div>
     
          <h1 className="my-[1rem] text-left font-poppins font-semibold text-[1.3rem] text-[#010101] text-center">
            {work.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}
