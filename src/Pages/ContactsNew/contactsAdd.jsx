import React from 'react'

function contactsAdd() {
  return (
    <div>
    <div class="h-screen w-full bg-[url('../src/assets/pattern.png')] absolute -z-10"></div>
    <div class="h-screen w-full bg-[url('../src/assets/Ellipse2.png')] absolute -z-9 bg-no-repeat bg-cover bg-center">
      <div class="ml-[10%] mt-[4%]">
        <img src="../src/assets/logo2.png" alt=""/>
        <h1 class="font-primaryBold text-[3rem] text-[#FFFFFF] mt-[5%]">New Contact</h1>
      </div>

    <div class="w-screen">
      <form class="grid grid-cols-2 ml-[10%]">
              <input type="text" placeholder='full name' class="mt-9 block w-[70%] px-5 py-2 rounded-full focus:outline-none"/>
          <div>
              <input type="email" placeholder='e-mail' class="mt-10 block w-[70%] px-5 py-2 border rounded-full focus:outline-none"/>
          </div>
          <div>
              <input type="number" placeholder='phone number' class="mt-4 block w-[70%] px-5 py-2 border rounded-full focus:outline-none"/>
          </div>
          <div>
              <div class="flex items-center mt-4 gap-3 text-[#FFFFFF] text-[1.5rem]">
                      <span class="mr-[10%]">gender</span>
                      <input type="radio" name="gender" value="male" class=" border-transparent"/>
                      <span class="ml-1 mr-[10%]">Male</span>
                      <input type="radio" name="gender" value="female" class=" border-gray-300"/>
                      <span class="ml-2">Female</span>
                  
              </div>
          </div>   
      </form>
   </div>
  <button id='' class="mt-[4%] ml-[10%] bg-transparent text-[#FFFFFF] font-primaryMedium hover:text-white py-1 px-9 border border-[#FFFFFF] rounded-full text-[25px]">add your first contact</button>
      <div class="flex justify-end mr-[5%] mt-[2%]">
        <img src="../src/assets/logOut.png" alt="" class=" cursor-pointer"/>
        <a href="" class="flex items-center pl-4 font-primaryMedium text-[1rem] text-[#FFFFFF] underline">logout</a>
      </div>
    </div>
  </div>
  )
}

export default contactsAdd

