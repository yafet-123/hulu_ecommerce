import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../../components/common/MainHeader';
import List from '../../../components/Home/List';
import Display from "../../../components/DisplayItem/Display";
import { prisma } from '../../../util/db.server.js'

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  const id = query.id
  const items = await prisma.Items.findMany({
    orderBy : {
      CreatedDate:'desc'
    },
    include:{
      User:{
        select:{
          UserName:true,
          Image:true
        }
      },
    }
  });

  const item = await prisma.Items.findUnique({
    where:{
      items_id: Number(id),
    },
    include:{
      User:{
        select:{
          UserName:true,
          Image:true,
          phonenumber:true
        }
      },
    }
  });

  const AllItems = items.map((data)=>({
    items_id:data.items_id,
    name:data.name,
    Description:data.Description,
    price:data.price,
    Image:data.Image,
    profile:data.profile,
    user:data.User,
    Condition:data.Condition,
    CreatedDate:data.CreatedDate
  }))

  return{
    props:{
      AllItems:JSON.parse(JSON.stringify(AllItems)),
      item:JSON.parse(JSON.stringify(item))
    }
  }
}

export default function ItemDisplay({AllItems,item}) {
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : Display Item" />
      <div className="flex flex-col px-2 lg:px-36">
        <Display item={item} />
        <List AllItems={AllItems} />
      </div>
    </div>
  )
}
