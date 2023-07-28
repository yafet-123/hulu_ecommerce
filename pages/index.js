import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../components/common/MainHeader';
import {HeroSection} from '../components/Home/HeroSection';

export default function Home() {
  return (
    <div className="">
      <MainHeader title="Helen Zeray : Home" />
      <HeroSection />
    </div>
  )
}
