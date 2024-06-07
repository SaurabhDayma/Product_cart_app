import React from "react";
import task  from '../assets/digitalflaxlogo.png'


function Home() {
     
    return (
        <div className="flex h-screen">
            <div className="w-1/2 h-full ml-96">
                <main className="h-full pt-16 flex items-center justify-center ml-6">
                    <div className="text-center">
                       <img src={task} alt="Logo" className="ml-60 mb-12" />
                    </div>
                </main>
            </div>
        </div>
 
  )
}

export default Home;