import List from "../components/Categories/List";
import { MainHeader } from '../components/common/MainHeader';


export default function Categories() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Hulu Media Ecommerce : Categories" />
      <List />
    </main> 
  )
}