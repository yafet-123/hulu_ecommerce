import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../../components/common/MainHeader';
import { UpdateForm } from '../../../components/UserProfile/UpdateForm';
import { useSession } from "next-auth/react";
import { prisma } from '../../../util/db.server.js'

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  const id = query.item_id

  const items = await prisma.Items.findUnique({
    where:{
      items_id: Number(id),
    },
    include:{
      User:{
        select:{
          UserName:true,
          Image:true,
          user_id:true
        }
      },
    }
  });

  return{
    props:{
      items:JSON.parse(JSON.stringify(items)),
    }
  }
}

export default function Item({items}) {
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : User Profile" />
      <UpdateForm items={items} />
    </div>
  )
}