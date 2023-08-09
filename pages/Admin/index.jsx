import { VerticalNavbar } from "../../components/Admin/VerticalNavbar";
import { DashBoard } from "../../components/Admin/DashBoard";
// import { useState,useEffect} from 'react'
// import { useRouter } from 'next/router'
import { MainHeader } from '../../components/common/MainHeader';
// import React from 'react'
// import { prisma } from '../util/db.server.js'

// export async function getServerSideProps(){
//   const categories = await prisma.Category.findMany({
//     orderBy: {
//       category_id:"asc"
//     },
//     include:{
//       User:{
//           select:{
//               UserName:true
//           }
//       }
//     }
//   })

//   const Allcategories = categories.map((data)=>({
//       category_id:data.category_id,
//       CategoryName:data.CategoryName,
//       CreatedDate:data.CreatedDate,
//       ModifiedDate:data.ModifiedDate,
//       userName:data.User.UserName
//   }))

//   const jobs = await prisma.Job.count()

//   const groupBy = await prisma.News.groupBy({
//     by: ['user_id'],
//     _count: {
//       news_id: true,
//     },
//   })

//   console.log(groupBy)

//   const news = await prisma.News.count()

//   const entertainments = await prisma.Entertainment.count()

//   return{
//     props:{
//       categorie:JSON.parse(JSON.stringify(Allcategories)),
//       jobs:JSON.parse(JSON.stringify(jobs)),
//       news:JSON.parse(JSON.stringify(news)),
//       entertainments:JSON.parse(JSON.stringify(entertainments)),
//     }
//   }
// }

export default function Admin(){
  

  function handleChange(newValue) {
      setselected(newValue);
  }
  // if (status === "authenticated")

    return (
      <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
        <MainHeader title="Hulu Media Ecommerce : Contact" />
        <div className="flex bg-[#e6e6e6] dark:bg-[#02201D] pt-10">
          <VerticalNavbar onChange={handleChange} data={data} />
          // <div className="w-full">
          //   <DashBoard categories={categories} />
          // </div>
        </div>
      </main>
    );

}

