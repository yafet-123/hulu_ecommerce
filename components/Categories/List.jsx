import Display from './Display'
import Link from 'next/link'
export default function ListCategories({categories}) {

  const shoes = [];
  const electronics = [];
  const healthbeauty = [];
  const babykids = []
  const homekitchen = []
  for (const Categorie of categories) {
    if (Categorie.SuperCategory === "Shoes , clothes and accessories") {
      shoes.push(Categorie);
    } else if (Categorie.SuperCategory === "Electronics") {
      electronics.push(Categorie);
    } else if (Categorie.SuperCategory === "Health & Beauty") {
      healthbeauty.push(Categorie);
    } else if (Categorie.SuperCategory === "Baby & kids") {
      babykids.push(Categorie);
    } else if (Categorie.SuperCategory === "Home & kitchen") {
      homekitchen.push(Categorie);
    }
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 px-5">    
      <div>
        <Link href="/ ">
          <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-xl text-[#D0DFFF] pb-5">Any</h1>
        </Link>
        <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-xl text-[#D0DFFF] pb-5">Shoes , clothes and accessories</h1>
        {shoes.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <div>
        <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-xl text-[#D0DFFF] pb-5">Electronics</h1>
        {electronics.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <div>
        <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-xl text-[#D0DFFF] pb-5">Health & Beauty</h1>
        {healthbeauty.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <div>
        <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-xl text-[#D0DFFF] pb-5">Baby & kids</h1>
        {babykids.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <div>
        <h1 className="text-black text-left font-poppins font-semibold text-lg lg:text-xl text-[#D0DFFF] pb-5">Home & kitchen</h1>
        {homekitchen.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
    </div>
  );
}

