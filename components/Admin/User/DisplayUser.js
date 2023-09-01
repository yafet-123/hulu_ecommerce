import React from "react";
import { useState,useEffect, useContext} from 'react'
import moment from 'moment';
import Image from "next/image";
import { useRouter } from 'next/router'
import { AiFillPhone, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
// import {DeleteUser} from './DeleteUser.js'
// import {UpdateUser} from './UpdateUser.js'
 
export function DisplayUser({user}) {
    const router = useRouter();
    const [copied, setCopied] = useState("");

    const handleCopy = () => {
        setCopied(user.email);
        navigator.clipboard.writeText(user.email);
        setTimeout(() => setCopied(false), 3000);
    };

    const handleEdit = (user_id) => {
        console.log(user_id);
        router.push(`/Admin/User/Update?id=${user_id}`);
    };

    const handleDelete = async (user_id) => {
        const hasConfirmed = confirm("Are you sure you want to delete this User?");

        if (hasConfirmed) {
          try {
            const response = await fetch(`/api/User/${user_id}`, {
              method: "DELETE",
            });
            if (response.ok) {
              router.push("/Admin/User");
            }
          } catch (error) {
            console.log(error);
          }
        }
    };

    return (
        <div className="px-5 bg-gray-200 py-5 rounded-xl">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-between items-center gap-3 cursor-pointer">
                  <h3 className="font-satoshi font-semibold text-gray-900">
                    {user.user_id}
                  </h3>
                  <p className="font-inter text-sm text-gray-500">
                    {moment(user.ModifiedDate).utc().format("YYYY-MM-DD")}
                  </p>
                </div>

                <div className="copy_btn" onClick={handleCopy}>
                  <Image
                    src={
                      copied === user.email
                        ? "/assets/icons/tick.svg"
                        : "/assets/icons/copy.svg"
                    }
                    alt={copied === user.email ? "tick_icon" : "copy_icon"}
                    width={12}
                    height={12}
                  />
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <p className="flex mt-5 font-satoshi text-sm text-gray-700">
                    <span className="text-xs lg:text-lg pr-3"><AiOutlineUser /></span>
                    {user.UserName}
                </p>
                <p className="flex mt-5 font-satoshi text-sm text-gray-700">
                    <span className="text-xs lg:text-lg pr-3"><AiOutlineMail /></span>
                    {user.email}
                </p>
                <p className="flex mt-5 font-satoshi text-sm text-gray-700">
                    <span className="text-xs lg:text-lg pr-3"><AiFillPhone /></span>
                    {user.phonenumber}
                </p>
            </div>

            <div className="mt-5 flex flex-center gap-4 border-t border-gray-100 pt-3">
                <p
                    className="font-inter text-sm green_gradient cursor-pointer"
                    onClick={() => handleEdit(user.user_id)}
                >
                    Edit
                </p>
                <p
                    className="font-inter text-sm orange_gradient cursor-pointer"
                    onClick={() => handleDelete(user.user_id)}
                >
                    Delete
                </p>
            </div>
        </div>
    );
}
