import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../components/common/MainHeader';
import List from '../components/profile/List';
import ProfileCard from '../components/profile/ProfileCard'

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : Profile" />
      <ProfileCard />
      <List />
    </div>
  )
}
