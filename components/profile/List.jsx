import Display from './Display'
export default function List({items}) {
  // const Sales = [
  //   {
  //     "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976469/Ecommerce/2ee00c23-3b7e-45e4-b3f5-483a8f55c718_hi6xi4.jpg",
  //     "name" : "Iphones",
  //     "price" : 30000 ,
  //     "posted" : "1 days",
  //     "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690978117/Ecommerce/photo-1438761681033-6461ffad8d80_qvkvak.jpg"
  //   },
  //   {
  //     "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976438/Ecommerce/24bb1ef2-53d7-44de-8db2-4606fa744fe1_mnb8pr.jpg",
  //     "name" : "Iphone 14 Pro Max",
  //     "price" : 200000 ,
  //     "posted" : "3 days",
  //     "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690978163/Ecommerce/images_tmaxim.jpg"
  //   },
  //   {
  //     "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976424/Ecommerce/715af2f7-4a90-492f-b512-03c4770fe3e2_wpfz2r.jpg",
  //     "name" : "Iphone",
  //     "price" : 130000 ,
  //     "posted" : "5 days",
  //     "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690978185/Ecommerce/images_qvguoe.jpg"
  //   },
  //   {
  //     "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976407/Ecommerce/7454a378-e951-4f96-a86c-be16630cea25_okumbp.jpg",
  //     "name" : "Iphone",
  //     "price" : 25000 ,
  //     "posted" : "6 days",
  //     "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690978185/Ecommerce/images_qvguoe.jpg"
  //   },
  //   {
  //     "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976386/Ecommerce/4cda224d-b569-4c63-8309-de0ec299545c_pz1csh.jpg",
  //     "name" : "Samsung",
  //     "price" : 19000 ,
  //     "posted" : "2 days",
  //     "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690978117/Ecommerce/photo-1438761681033-6461ffad8d80_qvkvak.jpg"
  //   },
  //   {
  //     "Image" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690976317/Ecommerce/b579db6a-dd47-4f82-82dd-bd3848353eff_hc6381.jpg",
  //     "name" : "Iphones",
  //     "price" : 19000 ,
  //     "posted" : "2 days",
  //     "profile" : "https://res.cloudinary.com/df7hlpjcj/image/upload/v1690978163/Ecommerce/images_tmaxim.jpg"
  //   }
  // ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-20">
      {items.map((data, index) => (
        <Display key={index} sale={data} />
      ))}
    </div>
  );
}

