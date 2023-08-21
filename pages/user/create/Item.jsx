import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../../components/common/MainHeader';
import {ContactForm} from '../../../components/UserProfile/Form';
import { useSession } from "next-auth/react";

export default function Item() {
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : User Profile" />
      <ContactForm />
    </div>
  )
}