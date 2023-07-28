import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../components/common/MainHeader';
import {List} from '../components/Home/List';

export default function Home() {
  return (
    <div className="">
      <MainHeader title="Hulu Media Ecommerce : Home" />
      <List />
    </div>
  )
}
