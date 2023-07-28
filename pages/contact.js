import {ContactForm} from "../components/contactus/ContactForm";
import { MainHeader } from '../components/common/MainHeader';


export default function Contact() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : Contact" />
      <ContactForm />
    </main> 
  )
}