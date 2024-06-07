import React from 'react'
import  { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div>
         <div className="w-1/4 h-full bg-neutral-200 fixed top-0 left-0 z-10 opacity-75 pt-6">
                <ul className="mt-10 pt-6">
                    <Link to ="/home">
                    <li className="flex items-center mt-4 hover:bg-amber-300 hover:stroke-black">
                        <span className="mr-2 pt-5 text-xl ml-2 text-center">🏠</span>
                        Home
                       <IoMdArrowDropright className = "absolute bottom-100 right-0  hover:stroke-black" />
                    </li>
                    </Link>
                    <Link to="/category">
                    <li className="flex items-center pt-6 mt-4 hover:bg-amber-300 hover:stroke-black">
                        <span className="mr-2 text-xl ml-2 text-center">📂</span>
                        Categoryz
                        <IoMdArrowDropright className = "absolute bottom-100 right-0  hover:stroke-black"/>
                    </li>
                    </Link>
                    <Link to="/product">
                    <li className="flex items-center pt-6 mt-4 hover:bg-amber-300 hover:stroke-black">
                        <span className="mr-2 text-xl ml-2 text-center">🛒</span>
                        Products
                        <IoMdArrowDropright className = "absolute bottom-100 right-0  hover:stroke-black"/>
                    </li>
                    </Link>
                </ul>
            </div>
    </div>
  )
}
