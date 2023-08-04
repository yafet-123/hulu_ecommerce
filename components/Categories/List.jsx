import Display from './Display'

export default function ListCategories() {
  const Categories = [
    {
      "id":1,
      "type":"",
      "name":"Any"
    },
    {
      "id":2,
      "type":"Shoes , clothes and accessories",
      "name":"Jewelry & Accessories"
    },
    {
      "id":3,
      "type":"Shoes , clothes and accessories",
      "name":"Women's clothing & shoes"
    },
    {
      "id":4,
      "type":"Shoes , clothes and accessories",
      "name":"Men's clothing & shoes"
    },
    {
      "id":5,
      "type":"Shoes , clothes and accessories",
      "name":"Bags & Luggages"
    },
    {
      "id":6,
      "type":"Electronics",
      "name":"Mobile phones & accessories"
    },
    {
      "id":7,
      "type":"Electronics",
      "name":"Computers & Accessories"
    },
    {
      "id":8,
      "type":"Electronics",
      "name":"camera & photos"
    },
    {
      "id":9,
      "type":"Electronics",
      "name":"Home Electronics"
    },
    {
      "id":10,
      "type":"Electronics",
      "name":"Office Electronics"
    },
    {
      "id":11,
      "type":"Electronics",
      "name":"Car Electronics"
    },
    {
      "id":12,
      "type":"Electronics",
      "name":"Video game console & Accessories"
    },
    {
      "id":13,
      "type":"Electronics",
      "name":"security & surveillance"
    },
    {
      "id":14,
      "type":"Electronics",
      "name":"portable Video & audio"
    },
    {
      "id":15,
      "type":"Shoes , clothes and accessories",
      "name":"Bags & Luggages"
    },
    {
      "id":16,
      "type":"Health & Beauty",
      "name":"Makeup"
    },
    {
      "id":17,
      "type":"Health & Beauty",
      "name":"Skin Care"
    },
    {
      "id":18,
      "type":"Health & Beauty",
      "name":"Hair care"
    },
    {
      "id":19,
      "type":"Health & Beauty",
      "name":"Fragrance"
    },
    {
      "id":20,
      "type":"Health & Beauty",
      "name":"nails , hands and foot care"
    },
    {
      "id":21,
      "type":"Baby & kids",
      "name":"Baby care"
    },
    {
      "id":22,
      "type":"Baby & kids",
      "name":"Kid cloth & shoes"
    },
    {
      "id":23,
      "type":"Baby & kids",
      "name":"Toys"
    },
    {
      "id":24,
      "type":"Baby & kids",
      "name":"Strollers, car seats & accessories"
    },
    {
      "id":25,
      "type":"Home & kitchen",
      "name":"furniture"
    },
    {
      "id":26,
      "type":"Home & kitchen",
      "name":"garden & outdoors"
    },
    {
      "id":27,
      "type":"Home & kitchen",
      "name":"kitchenware"
    },
    {
      "id":28,
      "type":"Home & kitchen",
      "name":"bedding"
    },
    {
      "id":29,
      "type":"Home & kitchen",
      "name":"home decor"
    },
    {
      "id":30,
      "type":"Home & kitchen",
      "name":"pet supplies"
    },
    {
      "id":31,
      "type":"Home & kitchen",
      "name":"bath"
    }

  ]

  const shoes = [];
  const electronics = [];
  const healthbeauty = [];
  const babykids = []
  const homekitchen = []
  for (const Categorie of Categories) {
    if (Categorie.type === "Shoes , clothes and accessories") {
      shoes.push(Categorie);
    } else if (Categorie.type === "Electronics") {
      electronics.push(Categorie);
    } else if (Categorie.type === "Health & Beauty") {
      healthbeauty.push(Categorie);
    } else if (Categorie.type === "Baby & kids") {
      babykids.push(Categorie);
    } else if (Categorie.type === "Home & kitchen") {
      homekitchen.push(Categorie);
    }
  }
  return (
    <div className="flex flex-col px-5">
      <Link href="/ " className="pb-5 lg:pb-10">
        <h1 className="">{categorie.name}</h1>
      </Link>
      <h1 className="text-black text-left font-poppins font-semibold text-md lg:text-lg text-[#D0DFFF]">Shoes , clothes and accessories</h1>
      <div className="pl-5">
        {shoes.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <h1 className="text-black text-left font-poppins font-semibold text-md lg:text-lg text-[#D0DFFF]">Electronics</h1>
      <div className="pl-5">
        {electronics.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <h1 className="text-black text-left font-poppins font-semibold text-md lg:text-lg text-[#D0DFFF]">Health & Beauty</h1>
      <div className="pl-5">
        {healthbeauty.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <h1 className="text-black text-left font-poppins font-semibold text-md lg:text-lg text-[#D0DFFF]">Baby & kids</h1>
      <div className="pl-5">
        {babykids.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <h1 className="text-black text-left font-poppins font-semibold text-md lg:text-lg text-[#D0DFFF]">Home & kitchen</h1>
      <div className="pl-5">
        {homekitchen.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
    </div>
  );
}

