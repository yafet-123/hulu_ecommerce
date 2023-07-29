import Display from './Display'
export default function List() {
  const Sales = [
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png",
      "name" : "shoes",
      "price" : 50 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png",
      "name" : "shoes",
      "price" : 2000 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png",
      "name" : "shoes",
      "price" : 50 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png",
      "name" : "shoes",
      "price" : 15000 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png",
      "name" : "shoes",
      "price" : 19000 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    }
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-56">
      {Sales.map((data, index) => (
        <Display key={index} sale={data} />
      ))}
    </div>
  );
}

