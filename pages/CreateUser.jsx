import {UserForm} from "../components/CreateUser/Form";
import { MainHeader } from '../components/common/MainHeader';

export default function CreateUser() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-[#8C34E8] flex flex-col">
      <MainHeader title="Hulu Media Ecommerce : CreateUser" />
      <UserForm />
    </main> 
  )
}