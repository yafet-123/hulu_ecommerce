import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../components/common/MainHeader';
import List from '../../components/UserProfile/List';
import ProfileCard from '../../components/UserProfile/ProfileCard'
import { useSession } from "next-auth/react";
import { prisma } from '../../util/db.server.js'

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  const id = query.user_id

  const data = await prisma.User.findUnique({
    where:{
      user_id: Number(id),
    },
  });

  const items = await prisma.Items.findMany({
    where:{
      user_id: Number(id),
    },
  });

  console.log(data)

  return{
    props:{
      user:JSON.parse(JSON.stringify(data)),
      items:JSON.parse(JSON.stringify(items)),
    }
  }
}

export default function Profile({user,items}) {
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : User Profile" />
      <ProfileCard user={user} />
      <List items={items} />
    </div>
  )
}