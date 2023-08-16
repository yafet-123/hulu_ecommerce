import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../../util/db.server.js'

export default async function handeleUpdateIndividualUser(req, res){
  const {userId} = req.query
  const {UserName, email, phonenumber} = req.body
  console.log(req.query.userId)
  const users = await prisma.User.update({    
    where:{
      user_id: Number(userId),
    },
    data:{
      UserName,
      email,
      phonenumber
    },
  })
  res.json(users)
}