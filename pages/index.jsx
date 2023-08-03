import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../components/common/MainHeader';
import List from '../components/Home/List';
import ListCategories from "../components/Categories/List";
export default function Home() {
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : Home" />
      <div className="flex flex-col lg:flex-row px-2 lg:px-36">
        <ListCategories />
        <List />
      </div>
    </div>
  )
}
