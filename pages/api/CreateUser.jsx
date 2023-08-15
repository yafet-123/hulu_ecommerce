import { prisma } from '../../util/db.server.js'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";

export default async function handleadduser(req, res){
	const {name ,email ,phone ,Password } = req.body;
	console.log(name)
	const data = await prisma.User.create({
		data:{
			UserName:name,
			email:email,
			phonenumber:phone,
			Password:bcrypt.hashSync(Password, 8),
		},
	});

	// take the username and password and save it , the password is bcrypt
  	const token = jwt.sign(
    	{ userId: data.user_id, user: data.name },process.env.JWT_SECRET,
    		{expiresIn: process.env.JWT_LIFETIME,}
  	);
  

  	res.status(StatusCodes.CREATED).json({
    	data: {
      		userId: data.user_id,
    		user: data.name,
    	},
    	token,
  	});
	
}