import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../components/common/MainHeader';
import List from '../../components/profile/List';
import ProfileCard from '../../components/UserProfile/ProfileCard'
import { useSession } from "next-auth/react";

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  const id = query.user_id

  const data = await prisma.User.findUnique({
    where:{
      user_id: Number(id),
    },
  });

  return{
    props:{
      user:JSON.parse(JSON.stringify(data)),
    }
  }
}

export default function Home({user}) {
  const { status, data } = useSession();
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : User Profile" />
      <ProfileCard profile={data} />
      
    </div>
  )
}