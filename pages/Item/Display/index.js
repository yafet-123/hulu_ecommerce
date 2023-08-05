import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../../components/common/MainHeader';
import List from '../../../components/Home/List';
import Display from "../../../components/Display/Display";
export default function ItemDisplay() {
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : Display Item" />
      <div className="flex flex-col-reverse lg:flex-row px-2 lg:px-36">
        <Display />
        <List />
      </div>
    </div>
  )
}
