import React from 'react'

function home() {
  return (
    <div>
      <div className="h-screen w-full bg-[url('src/assets/pattern.png')] absolute -z-10"></div>
      <div className="h-screen w-full bg-[url('src/assets/Ellipse2.png')] absolute -z-9 bg-no-repeat bg-cover bg-center">
        <div className="ml-[10%] mt-[5%]">
          <img src="src/assets/logo2.png" alt=""/>
          <h1 className="font-primaryBold text-[3rem] text-[#FFFFFF] mt-[5%]">Welcome,</h1>
          <p className='font-primaryMedium text-[1.5rem] text-[#FFFFFF]'>This is where your contacts will live. Click the button below <br /> to add a new contact.</p>
          <button className="mt-[4%] bg-transparent text-[#FFFFFF] font-primaryMedium hover:text-white py-1 px-9 border border-[#FFFFFF] rounded-full text-[25px]">add your first contact</button>
        </div>
        <div className="flex justify-end mr-[5%] mt-[4%]">
          <img src="src/assets/logOut.png" alt="" className=" cursor-pointer"/>
          <a href="" className="flex items-center pl-4 font-primaryMedium text-[1rem] text-[#FFFFFF] underline">logout</a>
        </div>
      </div>
    </div>
  )
}

export default home
