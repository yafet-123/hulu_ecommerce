import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../../components/common/MainHeader';
import {ItemForm} from '../../../components/UserProfile/Form';
import { useSession } from "next-auth/react";
import { prisma } from '../../../util/db.server.js'

export async function getServerSideProps(){

  const categories = await prisma.Category.findMany({
    orderBy : {
      CreatedDate:'desc'
    },
    include:{
      User:{
        select:{
          UserName:true
        }
      },
    }
  });

  return{
    props:{
      categories:JSON.parse(JSON.stringify(categories))
    }
  }
}

export default function Item({categories}) {
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : User Profile" />
      <ItemForm categories={categories} />
    </div>
  )
}