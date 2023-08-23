import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from 'next/image'
import axios from 'axios';
import Link from "next/link";
import ReactModal from "react-modal";
import { usePathname, useRouter } from "next/router";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  image:"",
  Password: "",
  ConfirmPassword:""
};

const validateForm = (values) => {
  const errors = {};
  const MAX_TEXT_LENGTH = 100;
  const Name = values.name;
  console.log(Name.length);

  if (Name.length > MAX_TEXT_LENGTH) {
    errors.name = `Name must be ${MAX_TEXT_LENGTH} characters or less`;
    console.log(errors.name);
  }

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  }

  if (!values.image) {
    errors.image = "Image is required";
  }

  if (!values.ConfirmPassword) {
    errors.ConfirmPassword = "Confirm Password is required";
  }

  if(!values.Password){
    errors.Password = "Password is required"
  }

  return errors;
};

export const UserForm = ({type}) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenone, setModalIsOpenone] = useState(false);
  const [images,setImage] = useState()
  console.log(images)
  async function imageUploadData({images}) {
    const formData = new FormData();
    let imagesecureUrl = ""
    formData.append('file', images)

    formData.append('upload_preset', 'my_upload')

    const imageUpload = await fetch(`https://api.cloudinary.com/v1_1/df7hlpjcj/image/upload`,{
      method:'POST',
      body: formData
    }).then(r=>
        r.json()
        
    )
    imagesecureUrl = imageUpload.secure_url
    return imagesecureUrl
  }

  const handleSubmitForUpdate = async (values) => {
    console.log(values);
    const images = values.image
    const imageData = await imageUploadData()
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
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmitForUpdate}
      >
        {({ handleSubmitForUpdate }) => (
          <form
            className=""
            onSubmit={handleSubmitForUpdate}
          > 
            <div className="grid grid-cols-10 center py-2 shadow-lg">
              <div className="col-start-4 col-span-4 px-8 pt-6 pb-8 mb-4 bg-[#8C34E8]">
                <h3 className="font-poppins text-left text-white font-bold text-4xl lg:tetx-6xl mb-5">
                  {type}
                </h3>

                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1 text-white">
                    UserName:
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 text-black border border-gray-300"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 text-white">
                    Email:
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 text-black border border-gray-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-1 text-white">
                    Phone:
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full p-2 text-black border border-gray-300"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="Password" className="block mb-1 text-white">
                    Password:
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="Password"
                    id="Password"
                    name="Password"
                    className="w-full p-2 text-black border border-gray-300"
                  />
                  <ErrorMessage
                    name="Password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="ConfirmPassword" className="block mb-1 text-white">
                    Confirm Password:
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="Password"
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    className="w-full p-2 text-black border border-gray-300"
                  />
                  <ErrorMessage
                    name="ConfirmPassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="image" className="block mb-1 text-white">
                    Image:
                    <span className="text-white text-sm ml-1">(required)</span>
                  </label>
                  <Field
                    type="file"
                    id="image"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full p-2 text-black border border-gray-300"
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className={images == null ? "hidden" : "flex justify-center items-center mb-10"}>
                  <Image 
                      src={images == null ? "/images/bgImage1.avif" :URL.createObjectURL(images)} 
                      width={200} height={100} 
                      alt="image that will be displayed" 
                      className=""
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#17c294] w-28 text-white paragraph-fonts py-2 px-4 mb-8 md:mb-0 md:py-4 md:px-8
                               shadow-black items-center rounded-md justify-center shadow-md hover:scale-105 duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>

      

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
