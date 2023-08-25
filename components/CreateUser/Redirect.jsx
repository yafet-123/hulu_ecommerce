import React from "react";
import axios from 'axios';
import { useState,useEffect, useContext} from 'react'
import Link from 'next/link'
export function Redirect({session}) {
	return(
		<div className="flex flex-col justify-center items-center h-screen w-full"> 
			<h1 className="text-black text-xl lg:text-3xl font-bold">You are logged in You cannot access this page. </h1>
			<div className="flex justify-end mx-5 my-10">
              <Link 
              		href={{
                      pathname: '/user/profile',
                      query: { user_id: session?.user.user_id },
                    }}
                	className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl p-4"
              	>
                	Go to Profile Page
              </Link>
            </div>
		</div>
	)
}