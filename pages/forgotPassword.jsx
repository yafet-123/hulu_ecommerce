import { MainHeader } from '../components/common/MainHeader';
import {ForgotPasswordForm} from '../components/ForgotPassword/Form';
export default function ForgotPassword() {
  
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-[#8C34E8] flex flex-col">
      <MainHeader title="Hulu Media : Forgot Password" />
      <ForgotPasswordForm/>
    </main >
  );
}