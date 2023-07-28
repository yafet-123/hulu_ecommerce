import {List} from '../components/News/List';
import { MainHeader } from '../components/common/MainHeader';
import { prisma } from '../util/db.server.js'

export async function getServerSideProps(context){
  const data = await prisma.news.findMany({
      orderBy: { news_id: "asc" },
      include: {
        User: {
          select: {
            UserName: true,
          },
        },
      },
    });
    const Allnews = data.map((data) => ({
      news_id: data.news_id,
      title: data.title,
      description: data.description,
      link: data.link,
      Image:data.Image,
      CreatedDate: data.CreatedDate,
      ModifiedDate: data.ModifiedDate,
      UserName: data.User.UserName,
    }));

  return{
    props:{
      news:JSON.parse(JSON.stringify(Allnews)),
    }
  }
}

export default function News({news}) {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : NEWS & PRESS" />
      <List selectenews={news} />
    </main> 
  )
}