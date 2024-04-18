import React from 'react'
import { Link } from 'react-router-dom'

function register() {
  return (
    <div className="loginSection flex items-center h-screen w-full bg-[url('src/assets/Ellipse.png')] bg-no-repeat bg-left">
    <div className="left_side flex flex-1 items-center justify-center">
    <div className="text-left">
      <h1 className="font-primaryBold text-[3.5rem] text-[#FFFFFF] mb-8">Register Now!</h1>
      <form action="" className="">
        <input type="email" placeholder='e-mail' className="rounded-full pr-5 pl-5 w-[30vw] text-[1.5rem] text-[#083F46]" /><br/><br/>
        <input type="password" placeholder='create password' className="rounded-full pr-5 pl-5 w-[30vw] text-[1.5rem] text-[#083F46]" /><br/><br/>
        <input type="password" placeholder='confirm password' className="rounded-full pr-5 pl-5 w-[30vw] text-[1.5rem] text-[#083F46]" />
        <br/><br />
        <button className="mt-3 bg-transparent text-[#FFFFFF] font-primaryMedium hover:text-white py-1 px-9 border border-[#FFFFFF] rounded-full text-[25px]">register</button>
      </form> 
      <br/>
      <div className="my-8">
      <Link to={'/login'} className="font-primaryMedium text-[20px] text-[#FFFFFF] underline">&lt; Back to login</Link>
      </div>
      </div>
    </div>
    <img src="src/assets/pattern.png" alt="" className="absolute -z-10 h-full w-full"/>
    <div className="rght_side flex flex-1 items-center justify-center">
      <img src="./src/assets/Group 1.png" alt="" />
    </div>
  </div>
  )
}

export default register
