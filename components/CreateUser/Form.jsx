import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from 'next/image'
import axios from 'axios';
import Link from "next/link";
import ReactModal from "react-modal";
import { usePathname, useRouter } from "next/router";
import {FiEye, FiEyeOff} from 'react-icons/fi'

export const UserForm = ({type}) => {
  const router = useRouter();
  const [typepassword, setTypepassword] = useState('password');
  const [typepasswordconfirm, setTypepasswordconfirm] = useState('password');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenone, setModalIsOpenone] = useState(false);
  const [typechange , settypechange] = useState(true)
  const [name, setName] = useState("")
  const [image, setImage] = useState()
  const [email, setEmail] = useState("")
  const [phone, setphone] = useState([])
  const [password,setpassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passworderror,setpassworderror] = useState("")
  const [loading, setLoading] = useState(false);
  const [error,seterror] = useState("")
  const [active, setActive ] = useState(false)
  
  async function imageUploadData({image}) {
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

  const handleSubmit = async (values) => {
    console.log(values);
    const image = values.image
    console.log(image)
    const imageData = await imageUploadData(image)
    try {
      const data = await axios.post(`../api/CreateUser`,{
        "name": values.name,
        "email": values.email,
        "Image": imageData,
        "phone": values.phone,
        "Password": values.Password
      }).then(function (response) {
        console.log(response.data);
        setModalIsOpen(true);
      }).catch(function (error) {
        setModalIsOpenone(true);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log("contact");
    router.reload()
  };
  
  const closeModalone = () => {
    setModalIsOpenone(false);
  };
  return (
    <div>
            
       <form className="max-w-7xl lg:mx-auto" onSubmit={handleSubmit}>
                <h1 className="text-xl lg:text-4xl font-bold text-center italic">Singin</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 px-2">
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
                            id="email" 
                            type="email" 
                            required
                            className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label 
                            htmlFor="floating_outlined" 
                           className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            Email
                        </label>
                    </div> 

                    <div className="relative mb-5">
                        <input 
                            id="phone" 
                            type="text" 
                            required
                            className="block w-full px-3 text-md lg:text-xl text-black bg-white py-4 border-2 border-black rounded-xl appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                        />
                        <label 
                            htmlFor="floating_outlined" 
                           className="absolute text-md lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            Phone Number
                        </label>
                    </div>  
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 px-2">
                  <div className="relative">
                    <input 
                        id="password" 
                        required
                        type={typepassword}
                        className="block w-full px-3 text-sm lg:text-xl text-black dark:text-white bg-white py-4 border-2 border-black rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <div className="absolute right-10 text-sm lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-1/2">
                        {typepassword==="password"?(
                            <span className='icon-span' onClick={()=>setTypepassword("text")}>
                              <FiEye size={30} />
                            </span>
                        ):(
                          <span className='icon-span' onClick={()=>setTypepassword("password")}>
                            <FiEyeOff size={30} />
                          </span>
                        )}
                    </div>
                    <label 
                        htmlFor="floating_outlined" 
                        className="absolute text-sm lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                        Password
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      id="ConfirmPassword" 
                      required
                      type={typepasswordconfirm}
                      className="block w-full px-3 text-sm lg:text-xl text-black dark:text-white bg-white py-4 border-2 border-black rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="absolute right-10 text-sm lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-1/2">
                      {typepasswordconfirm==="password"?(
                          <span className='icon-span' onClick={()=>setTypepasswordconfirm("text")}>
                            <FiEye size={30} />
                          </span>
                      ):(
                          <span className='icon-span' onClick={()=>setTypepasswordconfirm("password")}>
                            <FiEyeOff size={30} />
                          </span>
                      )}
                    </div>
                    <label 
                        htmlFor="floating_outlined" 
                        className="absolute text-sm lg:text-xl text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                        Confirm Password
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full px-2">
                    <label 
                        htmlFor="dropzone-file" 
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-black dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <p className="text-sm lg:text-lg text-black mb-5">Upload Company Image</p>
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-xs lg:text-sm text-black"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
                    </label>
                </div>
                

                <div className={image == null ? "hidden" : "flex justify-center items-center mb-10"}>
                    <Image 
                        src={image == null ? "/images/bgImage1.avif" :URL.createObjectURL(image)} 
                        width={500} height={200} 
                        alt="image that will be displayed" 
                        className="w-full"
                    />
                </div>

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
            Singin Successfully.
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
            Singin Submitted un Successfull. Please retry again.
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
