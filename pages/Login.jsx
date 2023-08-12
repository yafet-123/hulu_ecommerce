import {LoginForm} from "../components/Login/Form";
import { MainHeader } from '../components/common/MainHeader';

export default function Login() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Hulu Media Ecommerce : Login" />
      <LoginForm />
    </main> 
  )
}