import React from 'react'
import Logo from '../images/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route){
    if(route === location.pathname){
      return true;
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src={Logo} alt="Logo" className='cursor-pointer h-12' onClick={()=>navigate("/")}/>
            </div>
            <div>
              <ul className='flex space-x-10'>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-blue-900 border-b-blue-900"
              }`} onClick={()=>navigate("/")}>Home</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-blue-900 border-b-blue-900"
              }`} onClick={()=>navigate("/offers")}>Offers</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-blue-900 border-b-blue-900"
              }`} onClick={()=>navigate("/sign-in")}>Sign In</li>
              </ul>
            </div>
        </header>

    </div>
  )
}
