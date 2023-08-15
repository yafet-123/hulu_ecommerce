import { VerticalNavbar } from "../../../components/Admin/VerticalNavbar";
import { MainHeader } from '../../../components/common/MainHeader';
import { DisplayUser } from '../../../components/Admin/User/DisplayUser'; 
import { prisma } from '../../../util/db.server.js'

export async function getStaticProps(){
  const users = await prisma.User.findMany({orderBy : {ModifiedDate:'desc'}});
  const Allusers = users.map((data)=>({
      user_id:data.user_id,
      UserName:data.UserName,
      phonenumber:data.phonenumber,
      email:data.email,
      password:data.password,
      CreatedDate:data.CreatedDate,
      ModifiedDate:data.ModifiedDate
  }))

  return{
    props:{
      Allusers:JSON.parse(JSON.stringify(Allusers))
    }
  }
}

const UserCardList = ({ Allusers }) => {
  return (
    <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Allusers.map((user) => (
        <DisplayUser key={user.user_id} user={user} />
      ))}
    </div>
  );
};

export default function User({Allusers}){
  const data = {
    "name":"yafet"
  }
  function handleChange(newValue) {
      setselected(newValue);
  }
  return (
    <main className="w-full h-full px-2 lg:px-10 bg-white flex flex-col">
      <MainHeader title="Hulu Media Ecommerce : Admin" />
      <div className="flex pt-10">
        <VerticalNavbar onChange={handleChange} data={data} />
        <UserCardList Allusers={Allusers} />
      </div>
    </main>
  );

}

