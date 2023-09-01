import { prisma } from '../../../util/db.server.js'

export default async function handleaddItemFromUserPage(req, res){
	const {name,Description,price,Image,profile,Condition,categoryId, user_id} = req.body;
	let createitemsCategory = []

	for (let j = 0; j < categoryId.length; j++) {
		createitemsCategory.push({
			user_id : Number(user_id),
			category_id : Number(categoryId[j]),
		})
	}
	const data = await prisma.Items.create({
		data:{
			name,
			Description,
			price,
			Image,
			profile,
			Condition,
			ItemsCategory:{
				create: createitemsCategory
			},
			user_id:Number(user_id)
		},
	});
	res.json(data)
	
}