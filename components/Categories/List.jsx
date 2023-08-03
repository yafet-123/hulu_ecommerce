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
      {shoes.map((data, index) => (
        <Display key={index} categorie={data} />
      ))}

      {electronics.map((data, index) => (
        <Display key={index} categorie={data} />
      ))}
    </div>
  );
}

