import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


export const Header = () => {

    const [showLogout, setShowLogout] = useState(false);

    const navigate =  useNavigate();

    const toggleLogout = () => {
      setShowLogout(!showLogout);
    };
  
    const handleLogout = () => { 
        navigate('/login');
    };
  
    return (
      <div className="w-full h-full ml-1/4">
        <header className="bg-fuchsia-900 h-16 fixed top-0 left-0 w-full z-20">
          <h1 className="text-white text-xl ml-5 m-3">Digitalflake</h1>
          <div className="relative">
            <CgProfile
              className="size-8 absolute bottom-1 right-5 text-white cursor-pointer"
              onClick={toggleLogout}
            />
            {showLogout && (
              <div className="absolute bg-white shadow-md p-2 rounded-md right-0 mt-2 z-30 mt-6 mr-2">
                <button
                  className="text-red-700 hover:bg-gray-200 px-4 py-2 rounded-md w-full"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </header>
      </div>
 
  )
}
