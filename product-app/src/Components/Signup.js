import React, { useState } from 'react';
import task from '../assets/task.png'
import logo from "../assets/digitalflaxlogo.png"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => 
{  
    const [name,SetName] =  useState("");
    const [email,SetEmail] = useState("");
    const [password, SetPassword] =  useState("");

    const navigate =  useNavigate();

    const handelsignup = (e) =>
    {
        if (!email || !password) 
        {
            alert("Please enter email and password.");
            return;
        } 

       e.preventDefault();
        axios.post('http://localhost:8080/signup', {name , email , password})
        .then(result => {console.log(result) 
         navigate('/login')})
        .catch(err => console.log(err));
    }
    
    return (
    <div className="relative h-screen bg-blue bg-zinc-50">
    <img
      className=" absolute inset-0 object-cover w-full h-full"
      src={task}
      alt="Cover Image"/>

<div className='absolute inset-0 w-full h-full bg-sky-100
 bg-opacity-50'></div>
      
      <div className="absolute top-1/5 right-1/3 transform translate-y-8 translate-x-8 flex flex-col items-center justify-center h-4/5 w-2/4 py-3 bg-white bg-opacity- 73 box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)">
                <img src={logo} alt="Logo" className="h-16 mb-8" />
                <h3 className="text-gray-800 text-2xl mb-4 pb-4">Welcome to Digitalflake Admin</h3>
                <form onSubmit ={handelsignup} className="mb-6 flex flex-col">
                   <input type="name" placeholder="name" className="w-full p-2 mb-4 rounded border-solid border-2 border-black-600" value={name} 
                     onChange={(e) => SetName(e.target.value)} required/>
                    <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded border-solid border-2 border-black-600" value={email} 
                     onChange={(e) => SetEmail(e.target.value)} required/>
                    <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded  border-solid border-2 border-black-600" value={password} 
                     onChange={(e) => SetPassword(e.target.value)} required/>
                    <button type="submit" className="w-full bg-purple-700 text-white py-2 px-2 rounded mt - 8">Sign Up</button>
                </form>
                <Link to="/login">Already have an Account</Link>
            </div>
        </div>
);

};

export default SignUp;
