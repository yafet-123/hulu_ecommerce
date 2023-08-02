import Display from './Display'
export default function List() {
  const Sales = [
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
      "name" : "shoes",
      "price" : 50 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
      "name" : "shoes",
      "price" : 2000 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976424/Ecommerce/715af2f7-4a90-492f-b512-03c4770fe3e2_wpfz2r.jpg",
      "name" : "shoes",
      "price" : 50 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976407/Ecommerce/7454a378-e951-4f96-a86c-be16630cea25_okumbp.jpg",
      "name" : "shoes",
      "price" : 15000 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976386/Ecommerce/4cda224d-b569-4c63-8309-de0ec299545c_pz1csh.jpg",
      "name" : "shoes",
      "price" : 19000 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    },
    {
      "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976317/Ecommerce/b579db6a-dd47-4f82-82dd-bd3848353eff_hc6381.jpg",
      "name" : "shoes",
      "price" : 19000 ,
      "posted" : "2 days",
      "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1687270557/Portfolio/1678034902830_cniqik.png"
    }
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-40">
      {Sales.map((data, index) => (
        <Display key={index} sale={data} />
      ))}
    </div>
  );
}

