import { prisma } from '../../../../util/db.server.js'

export default async function handleupdateItems(req, res){
	const {id} = req.query
	console.log(req.query)
	const {name,Description,price,Image,profile,Condition , user_id} = req.body;

	const data = await prisma.Items.update({
		where:{items_id:Number(id)},
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