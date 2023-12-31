import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {BsFacebook, BsYoutube, BsLinkedin, BsInstagram, BsTwitter, BsTelegram} from 'react-icons/bs'
import { useSession, signOut } from "next-auth/react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { status, data: session } = useSession();
  const router = useRouter();
  const NavLinks = [
    { path: "/", name: "Home" },
    { path: "/contact", name: "Contact" }
  ];

  const socialMediaLinks = [
    {id:"https://www.linkedin.com/in/helen-zeray-789b89267",path:<BsLinkedin size={25}/>},
    {id:"https://instagram.com/helenzeray1?igshid=ZGUzMzM3NWJiOQ==",path:<BsInstagram size={25}/>},
  ]

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // when it will scrolldown greater than 90 it will have navbar will change it style
    const handleShadow = () => {
        if (window.scrollY >= 70) {
          setShadow(true);
        } else {
          setShadow(false);
        } 
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  const SignIn = () => {
    router.push("/CreateUser");
  };

  const Login = () => {
    router.push("/auth/login");
  };

  const Profile = () => {
    router.push({
      pathname: "/user/profile",
      query: { user_id: session?.user.user_id },
    })
  };

  console.log(session)

  return (
    <nav 
      className={`
        ${ shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-zinc-300 bg-opacity-80'
          : 'fixed w-full h-20 z-[100] border-b-2 border-slate-100 '}
      `}
    >
      <div className={` ${ open ? "bg-black bg-opacity-90" :"" } lg:justify-between justify-around px-5 lg:px-10 items-center lg:flex`}>
        <div className="flex items-center justify-between py-3 ">
          <h1 className={` ${ router.pathname == "/forgotPassword" ||shadow || open ? "text-white" : "text-black" } font-poppins text-xl md:text-2xl font-normal`}>
            Hulu Commerce
          </h1>

          <div className="pl-5 lg:hidden">
            <button
              className={` ${ router.pathname == "/forgotPassword" || shadow || open ? "text-white" : "text-black" } p-2 rounded-md outline-none focus:border-gray-400 focus:border `}
              onClick={() => setOpen(!open)}
            >
              {open === true ? ( 
                <AiOutlineClose size={35} />
              ) : (
                <AiOutlineMenu size={35} />
              )}
            </button>
          </div>
        </div>

        <div className="">
          <div
            className={`flex-1 justify-self-center pb-2 mt-4 md:block md:pb-0 md:mt-0 ${
              open ? "flex bg-transparent" : "hidden"
            }`}
          >
            <ul className={` ${ router.pathname == "/forgotPassword" || shadow || open ? "text-white" : "text-black" } items-center font-bold paragraph-fonts justify-center space-y-8 md:flex md:space-x-6 md:space-y-0`}>
              {NavLinks.map((link) => (
                <li
                  key={link.name}
                  className={` md:my-0 my-7 text-lg md:text-xl hover:underline cursor-pointer hover:text-[#17c294] ${
                    router.pathname === link.path
                      ? "text-[#17c294] underline"
                      : ""
                  } `}
                >
                  <Link href={link.path}>
                    <p onClick={closeDropdown}>{link.name}</p>
                  </Link>
                </li>
              ))}
              <div className="flex flex-col">
              { session?.user  ? (
                  <li>
                    <Image
                      src={session?.user.Image}
                      width={37}
                      height={37}
                      className='h-[37px] bg-cover rounded-full'
                      alt='profile'
                      onClick={() => setToggleDropdown(!toggleDropdown)}
                    />
                    {toggleDropdown && (
                      <div className='w-full dropdown lg:w-16'>
                        <Link
                          href={{
                            pathname: '/user/profile',
                            query: { user_id: session?.user.user_id },
                          }}
                          className='dropdown_link'
                          onClick={() => setToggleDropdown(false)}
                        >
                          My Profile
                        </Link>
                        <Link
                          href='/user/create/Item'
                          className='dropdown_link'
                          onClick={() => setToggleDropdown(false)}
                        >
                          Create Item
                        </Link>
                        <button
                          type='button'
                          onClick={() => {
                            setToggleDropdown(false);
                            signOut();
                          }}
                          className=''
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </li>
                ):(
                  <div className="flex flex-row">
                    <li>
                      <button
                        type='button'
                        className='mx-2 md:my-0 my-7 text-white text-lg md:text-xl cursor-pointer hover:text-white hover:bg-[#055741] border-black bg-[#17c294] rounded-xl px-4 py-1'
                        onClick={()=> SignIn()}
                      >
                        Sign In
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        className='md:my-0 my-7 text-white text-lg md:text-xl cursor-pointer hover:text-white hover:bg-[#350963] border-white bg-[#8C34E8] rounded-xl px-4 py-1'
                        onClick={()=> Login()}
                      >
                        Login
                      </button>
                    </li>
                  </div>
                )
              }
            </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
