import { useEffect, useState } from "react"
import {UpdateForm} from "../../../../components/Admin/User/Form";
import { useRouter } from 'next/router'
import { prisma } from '../../../../util/db.server.js'

export async function getServerSideProps(context){
  const {params,req,res,query} = context
  const userId = query.id
  console.log(userId)
  const user = await prisma.User.findUnique({    
    where:{
      user_id: Number(userId),
    },
  })
  console.log(user)

  return{
    props:{
      user:JSON.parse(JSON.stringify(user))
    }
  }
}

export default function Update({user}){
  const router = useRouter();
  const userId = router.query.id;
  const [submitting, setIsSubmitting] = useState(false);

  return (
    <section className="w-full h-full lg:pt-24">
      <UpdateForm
        type='Edit User'
        user={user}
      />
    </section>
  );
};
