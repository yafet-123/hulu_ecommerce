import Head from 'next/head'
import Image from 'next/image'
import { MainHeader } from '../../components/common/MainHeader';
import List from '../../components/Home/List';
import ListCategories from "../../components/Categories/List";
import { prisma } from '../../util/db.server.js'
import { useSession } from "next-auth/react";

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  const caname = query.name

  const itemsbycategory = await prisma.Items.findMany({
      orderBy : {
          items_id:'desc'
      },
      where:{
        ItemsCategory:{
          some: {
            Category:{
              CategoryName: caname
            }
          }
        }   
      },
      include:{
          User:{
            select:{
                UserName:true,
                Image:true,
                user_id:true
            }
          },
          ItemsCategory:{
            include:{
                Category:{
                        select:{
                          category_id:true,
                          CategoryName:true
                  }
                }
            }
          },
      } 
    });

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

  const AllItems = itemsbycategory.map((data)=>({
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
      categories:JSON.parse(JSON.stringify(categories))
    }
  }
}

export default function Categories({AllItems, categories}) {
  const { status, data: session } = useSession();
  return (
    <div className="flex flex-col w-full h-full py-0 pt-32">
      <MainHeader title="Hulu Media Ecommerce : Home" />
      <div className="flex flex-col-reverse lg:flex-row px-2 lg:px-36">
        <ListCategories categories={categories} />
        <List AllItems={AllItems} session={session} />
      </div>
    </div>
  )
}
