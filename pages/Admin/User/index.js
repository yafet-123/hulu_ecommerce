import { VerticalNavbar } from "../../../components/Admin/VerticalNavbar";
import { MainHeader } from '../../../components/common/MainHeader';

export default function User(){
  
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
        
      </div>
    </main>
  );

}

