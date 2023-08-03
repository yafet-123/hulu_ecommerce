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
    }

  ]

  const shoes = [];
  const electronics = [];
  for (const Categorie of Categories) {
    if (Categorie.type === "Shoes , clothes and accessories") {
      shoes.push(Categorie);
    } else if (Categorie.type === "Electronics") {
      electronics.push(Categorie);
    }
  }
  return (
    <div className="flex flex-col px-5">
      <h1>Shoes , clothes and accessories</h1>
      <div className="pl-5">
        {shoes.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
      <h1>Electronics</h1>
      <div className="pl-5">
        {electronics.map((data, index) => (
          <Display key={index} categorie={data} />
        ))}
      </div>
    </div>
  );
}

