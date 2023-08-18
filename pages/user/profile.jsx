import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../components/common/MainHeader';
import List from '../../components/profile/List';
import ProfileCard from '../../components/profile/ProfileCard'
import { useSession } from "next-auth/react";

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  
}

export default function Home() {
  const { status, data } = useSession();
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : User Profile" />
      <ProfileCard profile={data} />
      <List />
    </div>
  )
}