import React from "react";
import { useState,useEffect, useContext} from 'react'
import moment from 'moment';
import Image from "next/image";
import { useRouter } from 'next/router'
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

    return (
        <div className="px-0 lg:px-10">
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

            <div className="flex items-center justify-between">
                <p className="my-4 font-satoshi text-sm text-gray-700">
                    {user.UserName}
                </p>
                <p className="my-4 font-satoshi text-sm text-gray-700">{user.email}</p>
            </div>
        </div>
    );
}
