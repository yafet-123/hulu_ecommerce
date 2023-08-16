import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../../util/db.server.js'

export default async function handelegetIndividualdata(req, res){
  const {userId} = req.query
  console.log(req.query.userId)
  const users = await prisma.User.findUnique({    
    where:{
      user_id: Number(userId),
    },
  })
  res.json(users)
}
