import Image from "next/image";
import {Display} from '../../../components/works/Display'
import { prisma } from '../../../util/db.server.js'

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  const id = query.id
  const data = await prisma.SelectedWorks.findUnique({
      where: {
        selectedWorks_id: Number(id),
      },
      include: {
        User: {
          select: {
            email: true,
          },
        },
      },
    });

  return{
    props:{
      work:JSON.parse(JSON.stringify(data)),
    }
  }
}

export default function SelectedWorksView({work}) {
  return (
    <section className="w-full h-full pt-32 bg-white">
      <Display work={work}/>
    </section>
  );
}

