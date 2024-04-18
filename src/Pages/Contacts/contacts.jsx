import React from 'react'

function contacts() {
  return (
  <div>
    <div class="h-screen w-full bg-[url('src/assets/pattern.png')] absolute -z-10"></div>
    <div class="h-screen w-full bg-[url('src/assets/Ellipse2.png')] absolute -z-9 bg-no-repeat bg-cover bg-center">
      <div class="ml-[10%] mt-[4%]">
        <img src="src/assets/logo2.png" alt=""/>
        <div class="flex justify-between">
          <h1 class="font-primaryBold text-[2.5rem] text-[#FFFFFF] mt-[2%]">Contact</h1>
          <button class="mt-[4%] mr-[10%] h-[6vh] bg-transparent text-[#FFFFFF] font-primaryMedium hover:text-white px-9 border border-[#FFFFFF] rounded-full text-[20px]">add new contact</button>
        </div> 
            <div class="overflow-x-auto overflow-y-scroll rounded-[20px] mt-[10px]">
              <table class="w-[90%] text-left bg-[#FFFFFF] text-[#083F46]">
                  <thead class="font-primaryBold text-[#083F46] bg-[#FFFFFF]">
                      <tr>
                          <th scope="col" class="px-4 py-2">
                            
                          </th><th scope="col" class="px-4 py-2">
                            full name
                          </th>
                          <th scope="col" class="px-4 py-2">
                            gender
                          </th>
                          <th scope="col" class="px-4 py-2">
                            email
                          </th>
                          <th scope="col" class="px-4 py-2">
                            phone number
                          </th>
                          <th scope="col" class="px-4 py-2">
                            
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-[#FFFFFF] font-primaryMedium">
                          <td class="px-4 py-4">
                            <img src="src/assets/male.png" alt="" />
                          </td>
                          <td class="px-4 py-4">
                            Dion Fernando
                          </td>
                          <td class="px-4 py-4">
                            Male
                          </td>
                          <td class="px-4 py-4">
                            dion342@gmail.com
                          </td>
                          <td class="px-4 py-4">
                            0776342513
                          </td>
                          <td class="px-4 py-4">
                            <div class="flex justify-between">
                              <a href=""><img src="src/assets/edit.png" alt="" /></a>
                              <a href=""><img src="src/assets/delete.png" alt="" /></a>
                            </div>
                          </td>
                      </tr>
                      <tr class="font-primaryMedium">
                          <td class="px-4 py-2">
                            <img src="src/assets/female.png" alt="" />
                          </td>
                          <td class="px-4 py-2">
                            Senoli Edirisinghe
                          </td>
                          <td class="px-4 py-2">
                            Female
                          </td>
                          <td class="px-4 py-2">
                            ediri.senli@gmail.com
                          </td>
                          <td class="px-4 py-2">
                            0715483254
                          </td>
                          <td class="px-4 py-4">
                            <div class="flex justify-between">
                              <a href=""><img src="src/assets/edit.png" alt="" /></a>
                              <a href=""><img src="src/assets/delete.png" alt="" /></a>
                            </div>
                          </td>
                      </tr>
                      <tr class="font-primaryMedium">
                          <td class="px-4 py-2 ">
                            <img src="src/assets/male.png" alt="" />
                          </td>
                          <td class="px-4 py-2">
                            Kenath De Silva
                          </td>
                          <td class="px-4 py-2">
                            Male
                          </td>
                          <td class="px-4 py-2">
                            kenath1996@gmail.com
                          </td>
                          <td class="px-4 py-2">
                            0768978124
                          </td>
                          <td class="px-4 py-4">
                            <div class="flex justify-between">
                              <a href=""><img src="src/assets/edit.png" alt="" /></a>
                              <a href=""><img src="src/assets/delete.png" alt="" /></a>
                            </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

      <div class="flex justify-end mr-[5%] mt-[3%]">
        <img src="src/assets/logOut.png" alt="" class=" cursor-pointer"/>
        <a href="" class="flex items-center pl-4 font-primaryMedium text-[1rem] text-[#FFFFFF] underline">logout</a>
      </div>
    </div>
  </div>
  )
}

export default contacts
