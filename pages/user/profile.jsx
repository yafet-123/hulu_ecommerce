import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../components/common/MainHeader';
import List from '../../components/profile/List';
import ProfileCard from '../../components/UserProfile/ProfileCard'
import { useSession } from "next-auth/react";

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  const cookies = req.headers.cookie;

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
      categories:JSON.parse(JSON.stringify(categories)),
    }
  }
}

export default function Home() {
  const { status, data } = useSession();
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : User Profile" />
      <ProfileCard profile={data} />
      
    </div>
  )
}