import React from 'react'

function home() {
  return (
    <div>
      <div class="h-screen w-full bg-[url('src/assets/pattern.png')] absolute -z-10"></div>
      <div class="h-screen w-full bg-[url('src/assets/Ellipse2.png')] absolute -z-9 bg-no-repeat bg-cover bg-center">
        <div class="ml-[10%] mt-[5%]">
          <img src="src/assets/logo2.png" alt=""/>
          <h1 class="font-primaryBold text-[3.5rem] text-[#FFFFFF] mt-[5%]">Welcome,</h1>
          <p class='font-primaryMedium text-[2rem] text-[#FFFFFF]'>This is where your contacts will live. Click the button below <br /> to add a new contact.</p>
          <button class="mt-[4%] bg-transparent text-[#FFFFFF] font-primaryMedium hover:text-white py-1 px-9 border border-[#FFFFFF] rounded-full text-[25px]">add your first contact</button>
        </div>
        <div class="flex justify-end mr-[5%] mt-[4%]">
          <img src="src/assets/logOut.png" alt="" class=" cursor-pointer"/>
          <a href="" class="flex items-center pl-4 font-primaryMedium text-[1.5rem] text-[#FFFFFF] underline">logout</a>
        </div>
      </div>

      
    </div>
  )
}

export default home
