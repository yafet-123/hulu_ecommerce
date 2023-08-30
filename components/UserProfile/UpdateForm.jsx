import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from 'next/image'
import axios from 'axios';
import Link from "next/link";
import ReactModal from "react-modal";
import { usePathname, useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const UpdateForm = ({items}) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenone, setModalIsOpenone] = useState(false);
  const [name, setName] = useState("")
  const [image, setImage] = useState()
  const [previmage, setprevimage] = useState()
  const [Description, setDescription] = useState("")
  const [price, setprice] = useState()
  const [Condition, setCondition] = useState()
  const [profile, setProfile] = useState()
  const [loading, setLoading] = useState(false);
  const [error,seterror] = useState("")
  const { status, data } = useSession();
  const UserData = data?.user.user_id;
  const createImages = []
  useEffect(()=>{
    setName(items.name)
    setprevimage(items.Image[0])
    setDescription(items.Description)
    setprice(items.price)
    setCondition(items.Condition)
    setProfile(items.profile)
  },[])
  async function imageUploadData() {
    const formData = new FormData();
    let imagesecureUrl = ""
    formData.append('file', image)

    formData.append('upload_preset', 'my_upload')

    const imageUpload = await fetch(`https://api.cloudinary.com/v1_1/df7hlpjcj/image/upload`,{
      method:'POST',
      body: formData
    }).then(r=>
        r.json()
        
    )
    imagesecureUrl = imageUpload.secure_url
    console.log(imagesecureUrl)
    return imagesecureUrl
  }
  const handleSubmit = async () => {
    setLoading(true)
    const imageData = await imageUploadData()

      createImages.push(
        imageData
      )
      console.log(UserData)
    try {
      const data = await axios.post(`../../api/Item/update/${items.items_id}`,{
        "name": name,
        "Description": Description,
        "price": price,
        "Image": createImages,
        "profile": profile,
        "Condition": Condition,
        "user_id": UserData
      }).then(function (response) {
        console.log(response.data);
        setModalIsOpen(true);
      }).catch(function (error) {
        setModalIsOpenone(true);
        setLoading(false)
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log("contact");
    router.push('/')
  };

  const closeModalone = () => {
    setModalIsOpenone(false);
  };
  async function updateItem(e){
    e.preventDefault()
    handleSubmit()
  }

  const handleImage = (e) =>{
    setImage(e.target.files[0])
    setprevimage()
  }

  return (
    <div className="w-full flex flex-col items-center space-y-6 px-5 lg:px-52">
      <form className="max-w-7xl lg:mx-auto bg-gray-200 p-5 rounded-lg" onSubmit={updateItem}>
        <h3 className="font-poppins text-left text-[#010101] font-bold text-4xl lg:tetx-6xl mb-5">
           Create and share amazing products with the world, and let your imagination run wild
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 px-2">
          <div className="relative mb-5">
              <input 
                  id="name" 
                  type="text" 
                  required
                  className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <label 
                  htmlFor="floating_outlined" 
                  className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Name
              </label>
          </div>
                    
          <div className="relative mb-5">
              <input 
                  id="price" 
                  type="text" 
                  required
                  className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
              />
              <label 
                  htmlFor="floating_outlined" 
                 className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                  Price
              </label>
          </div>  
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 px-2">
          <div className="relative mb-5">
              <input 
                  id="Condition" 
                  type="text" 
                  required
                  className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
                  value={Condition}
                  onChange={(e) => setCondition(e.target.value)}
              />
              <label 
                  htmlFor="floating_outlined" 
                 className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                  Condition
              </label>
          </div>

          <div className="relative mb-5">
              <input 
                  id="profile" 
                  type="text" 
                  required
                  className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
              />
              <label 
                  htmlFor="floating_outlined" 
                 className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                  profile
              </label>
          </div>  
        </div>

        <div className="relative flex-1 my-10">
          <textarea 
              id="Description" 
              rows="7" 
              cols="50"
              required
              className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
          />
          <label 
              htmlFor="floating_outlined" 
              className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[10%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
              Description
          </label>
        </div> 

        <div className="flex items-center justify-center w-full px-2">
          <label 
              htmlFor="dropzone-file" 
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-black dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="text-sm lg:text-lg text-black mb-5">Upload Profile Image</p>
                  <svg aria-hidden="true" className="w-10 h-10 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-xs lg:text-sm text-black"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleImage} />
          </label>
        </div>  


        { previmage == null ? 
        <div className={image == null ? "hidden" : "flex justify-center items-center my-10"}>
            <Image 
                src={image == null ? "/images/bgImage1.avif" :URL.createObjectURL(image)} 
                width={300} height={100} 
                alt="image that will be displayed" 
                className=""
            />
        </div> :
        <div className="flex justify-center items-center my-10">
            <Image 
                src={previmage} 
                width={300} height={100} 
                alt="image that will be displayed" 
                className=""
            />
        </div>
      }

        <div className="my-5 flex flex-col lg:flex-row justify-between px-5">
          <h1 className="text-red-600 dark:text-red-400 text-md lg:text-2xl font-bold text-left mb-5 lg:mb-0">
              {error}
          </h1>
          <button 
              disabled={loading}
              className={`mx-2 mb-10 float-right text-white font-medium text-md lg:text-xl rounded-lg px-4 py-4 text-center inline-flex items-center
                  ${loading ? "bg-gray-200" : "bg-[#009688] hover:bg-[#009688] focus:ring-4 focus:ring-[#009688]" }`}
          >
              Submit
          </button>
        </div>
      </form>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="flex items-center justify-center w-full h-full"
      >
        {/* Add your modal content here */}
        <div className="flex flex-col items-center justify-center bg-[#F7F7F7] w-[350px] h-[200px] p-2 border rounded-sm ">
          <p className="text-md lg:text-xl mb-5 text-center">
            Item Update Successfully.
          </p>
          <button
            onClick={closeModal}
            className="p-2 bg-[#17c294] border text-white rounded-sm"
          >
            Close
          </button>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalIsOpenone}
        onRequestClose={closeModalone}
        contentLabel="Modal Two"
        className="flex items-center justify-center w-full h-full"
      >
        {/* Add your modal content here */}
        <div className="flex flex-col items-center justify-center bg-[#F7F7F7] w-[350px] h-[200px] p-2 border rounded-sm ">
          <p className="text-md lg:text-xl mb-5 text-center">
            Item update form Submitted un Successfull. Please retry again.
          </p>
          <button
            onClick={closeModalone}
            className="p-2 bg-[#17c294] border text-white rounded-sm"
          >
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
};
