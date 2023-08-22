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
  Description: "",
  price: "",
  Image: "",
  profile:"",
  Condition:"",
};

const validateForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.Description) {
    errors.Description = "Description is required";
  }

  if (!values.price) {
    errors.price = "price is required";
  }

  if (!values.Image) {
    errors.Image = "Message is required";
  }

  if (!values.profile) {
    errors.profile = "profile is required";
  }

  if (!values.Condition) {
    errors.Condition = "Condition is required";
  }

  return errors;
};

export const ItemForm = () => {
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
    <div className="w-full flex flex-col items-center space-y-6">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form
            className="flex flex-col px-2 lg:px-10 w-full"
            onSubmit={handleSubmit}
          >
            <h3 className="font-poppins text-left text-[#010101] font-bold text-4xl lg:tetx-6xl mb-5">
              Create and share amazing products with the world, and let your imagination run wild
            </h3>

            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
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
              <label htmlFor="price" className="block mb-1">
                Price:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="text"
                id="price"
                name="price"
                className="w-full p-2 text-black border border-gray-300"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="profile" className="block mb-1">
                Profile:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="text"
                id="profile"
                name="profile"
                className="w-full p-2 text-black border border-gray-300"
              />
              <ErrorMessage
                name="profile"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Condition" className="block mb-1">
                Condition:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="text"
                id="Condition"
                name="Condition"
                className="w-full p-2 text-black border border-gray-300"
              />
              <ErrorMessage
                name="Condition"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Description" className="block mb-1">
                Description:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="textarea"
                id="Description"
                name="Description"
                className="w-full p-2 text-black border border-gray-300"
              />
              <ErrorMessage
                name="Description"
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
            Item added Successfully.
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
            Item form Submitted un Successfull. Please retry again.
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
