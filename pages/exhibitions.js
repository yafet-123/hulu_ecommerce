import {List} from '../components/exhibitions/List';
import { MainHeader } from '../components/common/MainHeader';
import { prisma } from '../util/db.server.js'

export async function getServerSideProps(context){
  const exhibition = await prisma.Exhibition.findMany({
      orderBy: { exhibition_id: "asc" },
      include: {
        User: {
          select: {
            UserName: true,
          },
        },
      },
    });
    console.log(exhibition)
    const AllExhibition = exhibition.map((data) => ({
      exhibition_id: data.exhibition_id.toString(),
      title: data.title,
      description: data.description,
      date: data.date,
      Image:data.Image,
      type:data.type,
      view:data.view,
      place:data.place,
      CreatedDate: data.CreatedDate,
      ModifiedDate: data.ModifiedDate,
      UserName: data.User.UserName,
    }));

  return{
    props:{
      exhibitions:JSON.parse(JSON.stringify(AllExhibition)),
    }
  }
}

export default function Exhibitions({exhibitions}) {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : Exhibitions" />
      <List exhibitions={exhibitions} />
    </main> 
  )
}