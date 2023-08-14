import List from "../components/Categories/List";
import { MainHeader } from '../components/common/MainHeader';
import { prisma } from '../util/db.server.js'

export async function getStaticProps(){
  const categories = await prisma.Category.findMany({
    orderBy : {
      CreatedDate:'desc'
    },
    include:{
      User:{
        select:{
          UserName:true
        }
      },
    }
  });

  return{
    props:{
      categories:JSON.parse(JSON.stringify(categories)),
    }
  }
}

export default function Categories() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Hulu Media Ecommerce : Categories" />
      <List />
    </main> 
  )
}