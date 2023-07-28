import { List } from '../../components/works/List';
import { MainHeader } from '../../components/common/MainHeader';
import { prisma } from '../../util/db.server.js'

export async function getServerSideProps(context){
  const works = await prisma.SelectedWorks.findMany({
      orderBy: { selectedWorks_id: "asc" },
      include: {
        User: {
          select: {
            UserName: true,
          },
        },
      },
    });
    const Allworks = works.map((data) => ({
      selectedWorks_id: data.selectedWorks_id.toString(),
      title: data.title,
      description: data.description,
      exhibitions: data.exhibitions,
      Image:data.Image,
      view:data.view,
      CreatedDate: data.CreatedDate,
      ModifiedDate: data.ModifiedDate,
      UserName: data.User.UserName,
    }));

  return{
    props:{
      works:JSON.parse(JSON.stringify(Allworks)),
    }
  }
}

export default function SelectedWorks({works}) {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : SelectedWorks" />
      <List selectedWorks={works} />
    </main> 
  )
}