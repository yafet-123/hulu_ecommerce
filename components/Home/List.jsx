import Display from '/Display'
export default function List({ Works }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-10">
      {Works.map((data, index) => (
        <Display key={data.selectedWorks_id} work={data} />
      ))}
    </div>
  );
}

const Works = [
  {
    "image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png",
    "name" : "shoes",
    "price" : 50 ,
    "posted" : "2 days",
    "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png"
  },
  {
    "image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png",
    "name" : "shoes",
    "price" : 50 ,
    "posted" : "2 days",
    "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png"
  },
  {
    "image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png",
    "name" : "shoes",
    "price" : 50 ,
    "posted" : "2 days",
    "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png"
  },
  {
    "image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png",
    "name" : "shoes",
    "price" : 50 ,
    "posted" : "2 days",
    "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png"
  },
  {
    "image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png",
    "name" : "shoes",
    "price" : 50 ,
    "posted" : "2 days",
    "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v5687670570/Portfolio/5679394565496_beiv67.png"
  }
]