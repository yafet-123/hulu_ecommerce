import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import axios from 'axios';
import Link from "next/link";
import ReactModal from "react-modal";
import { usePathname, useRouter } from "next/router";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
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

  if (!values.ConfirmPassword) {
    errors.ConfirmPassword = "Confirm Password is required";
  }

  if(!values.Password){
    errors.Password = "Password is required"
  }

  return errors;
};

export const UserForm = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenone, setModalIsOpenone] = useState(false);
  const socialMediaLinks = [
    {
      id: "https://www.linkedin.com/in/helen-zeray-789b89267",
      path: <BsLinkedin size={30} color="black" />,
    },
    {
      id: "https://instagram.com/helenzeray1?igshid=ZGUzMzM3NWJiOQ==",
      path: <BsInstagram size={30} color="black" />,
    },
  ];
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const data = await axios.post(`../api/SentMail`,{
        "name": values.name,
        "email": values.email,
        "phone": values.phone,
        "message": values.message
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
    router.reload()
  };

  const closeModalone = () => {
    setModalIsOpenone(false);
  };
  return (
    <div className="w-full grid grid-cols-10 gap-4 bg-[#8C34E8]">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form
            className="col-start-4 col-span-4 w-full bg-white border rounded-md p-5"
            onSubmit={handleSubmit}
          >
            <h3 className="font-poppins text-left text-[#010101] font-bold text-4xl lg:tetx-6xl mb-5">
              Sign In
            </h3>

            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                UserName:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="name"
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
              <label htmlFor="email" className="block mb-1">
                Email:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
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
              <label htmlFor="phone" className="block mb-1">
                Phone:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
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
              <label htmlFor="Password" className="block mb-1">
                Password:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="text"
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
              <label htmlFor="ConfirmPassword" className="block mb-1">
                Confirm Password:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="text"
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

            <button
              type="submit"
              className="bg-[#17c294] w-28 text-white paragraph-fonts py-2 px-4 mb-8 md:mb-0 md:py-4 md:px-8
                           shadow-black items-center rounded-md justify-center shadow-md hover:scale-105 duration-300"
            >
              Submit
            </button>
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
            Your Enquiry form Submitted Successfully.
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
            Your Enquiry form Submitted un Successfull. Please retry again.
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
