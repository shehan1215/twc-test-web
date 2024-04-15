import React from 'react'

function register() {
  return (
    <div class="loginSection flex items-center h-screen w-full bg-[url('src/assets/Ellipse.png')] bg-no-repeat bg-left">
    <div class="left_side flex flex-1 items-center justify-center">
    <div class="text-left">
      <h1 class="font-primaryBold text-[3.5rem] text-[#FFFFFF]">Register Now!</h1>
      <br /><br />
      <form action="" class="pt-1 pb-1">
        <input type="email" placeholder='e-mail' class="rounded-full pr-5 pl-5 w-[30vw] text-[1.5rem] text-[#083F46]" /><br /><br />
        <input type="password" placeholder='password' class="rounded-full pr-5 pl-5 w-[30vw] text-[1.5rem] text-[#083F46]" />
        <br/><br/>
        <button class="mt-3 bg-transparent text-[#FFFFFF] font-primaryMedium hover:text-white py-1 px-9 border border-[#FFFFFF] rounded-full text-[25px]">register</button>
        <br />
        <a href="" class="font-primaryMedium text-[20px] text-[#FFFFFF] underline"> Back to login</a>
      </form> 
      </div>
    </div>
    <img src="src/assets/pattern.png" alt="" class="absolute -z-10 h-full w-full"/>
    <div class="rght_side flex flex-1 items-center justify-center">
      <img src="./src/assets/Group 1.png" alt="" />
    </div>
  </div>
  )
}

export default register
