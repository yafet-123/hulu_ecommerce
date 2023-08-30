import { prisma } from '../../../../util/db.server.js'

export default async function handledeleteItems(req, res){
	const {id} = req.query
	const data = await prisma.Items.delete({
		where:{items_id:Number(id)},
	});
	res.json(data)
}