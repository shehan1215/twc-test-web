import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className="loginSection flex items-center h-screen w-full bg-[url('src/assets/Ellipse.png')] bg-no-repeat bg-left">
      <div className="left_side flex flex-1 items-center justify-center">
      <div className="text-left">
        <h1 className="font-primaryBold text-[3.5rem] text-[#FFFFFF]">Hi there,</h1>
        <p className='font-primaryMedium text-[2rem] text-[#FFFFFF]'>Welcome to our<br/>contacts portal</p>
        <br /><br />
        <form action="" className="pt-1 pb-1">
          <input type="email" placeholder='e-mail' className="rounded-full pr-5 pl-5 w-[30vw] text-[1.5rem] text-[#083F46]" /><br /><br />
          <input type="password" placeholder='password' className="rounded-full pr-5 pl-5 w-[30vw] text-[1.5rem] text-[#083F46]" />
          <br/><br/>
          <button className="mt-3 bg-transparent text-[#FFFFFF] font-primaryMedium py-1 px-9 border border-[#FFFFFF] rounded-full text-[25px]">login</button> <span className="font-primaryMedium text-[20px] text-[#FFFFFF]"> or </span>
          <Link to={'/register'} className="font-primaryMedium text-[20px] text-[#FFFFFF] underline">Click here to Register</Link>
        </form> 
        </div>
      </div>
      <img src="src/assets/pattern.png" alt="" className="absolute -z-10 h-full w-full"/>
      <div className="rght_side flex flex-1 items-center justify-center">
        <img src="./src/assets/Group 1.png" alt="" />
      </div>
    </div>
  )
}

export default login
