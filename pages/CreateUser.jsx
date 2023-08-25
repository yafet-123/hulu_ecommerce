import {UserForm} from "../components/CreateUser/Form";
import {Redirect} from "../components/CreateUser/Redirect";Redirect
import { MainHeader } from '../components/common/MainHeader';
import { useSession } from "next-auth/react";

export default function CreateUser() {
  const { status, data: session } = useSession();
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Hulu Media Ecommerce : CreateUser" />
      { session?.user  ? (
        <Redirect  session={session}/>
      ):(
        <UserForm type='Signin' />
      )}
    </main> 
  )
}