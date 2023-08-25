import { prisma } from '../../../util/db.server.js'

export default async function handleaddItemFromUserPage(req, res){
	const {name,Description,price,Image,profile,Condition , user_id} = req.body;
	
	const data = await prisma.Items.create({
		data:{
			name,
			Description,
			price,
			Image,
			profile,
			Condition,
			user_id:Number(user_id)
		},
	});
	res.json(data)
	
}