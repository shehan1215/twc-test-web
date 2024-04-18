import React, { useState ,useEffect} from 'react'
import { getContacts } from '../../Services/Api/contact';

function contacts() {

  const [modal,setModal] = useState(false);
  const [data,setData] = useState('')
  const toggleModal = (e)=>{
    e.preventDefault();
    setModal(!modal)
  }


useEffect(()=>{


  const fetchData = async ()=>{

    const fetchData= await getContacts();
    setData(fetchData);
    console.log(data);
  }

  fetchData();

},[])

  return (
  <div>
       {modal && (
                              //   <div className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-50'>
                              //   <div onClick={toggleModal} className='w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg:[rgba(49,49,49,0.8)]'></div>
                              //   <div class="absolute top-1/2 left-1/2 bg-gray-200 p-4 rounded-md max-w-lg min-w-sm" style="transform: translate(-50%, -50%); line-height: 1.4;">
                              //       <h2>Hello Modal</h2>
                              //       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, maxime?</p>
                              //       <button className='absolute top-2.5 right-2.5 p-1.5' onClick={toggleModal}>close</button>
                              //   </div>
                              // </div>
                              <p>difdihfdihfishifhshfifhifsihfihfishidhfshi</p>
                              )};
    <div className="h-screen w-full bg-[url('src/assets/pattern.png')] absolute -z-10"></div>
    <div className="h-screen w-full bg-[url('src/assets/Ellipse2.png')] absolute -z-9 bg-no-repeat bg-cover bg-center">
      <div className="ml-[10%] mt-[4%]">
        <img src="src/assets/logo2.png" alt=""/>
        <div className="flex justify-between">
          <h1 className="font-primaryBold text-[2.5rem] text-[#FFFFFF] mt-[2%]">Contact</h1>
          <button className="mt-[4%] mr-[10%] h-[6vh] bg-transparent text-[#FFFFFF] font-primaryMedium hover:text-white px-9 border border-[#FFFFFF] rounded-full text-[20px]">add new contact</button>
        </div> 
            <div className="overflow-x-auto overflow-y-scroll rounded-[20px] mt-[10px]">
              <table className="w-[90%] text-left bg-[#FFFFFF] text-[#083F46]">
                  <thead className="font-primaryBold text-[#083F46] bg-[#FFFFFF]">
                      <tr>
                          <th scope="col" className="px-4 py-2">
                            
                          </th><th scope="col" className="px-4 py-2">
                            full name
                          </th>
                          <th scope="col" className="px-4 py-2">
                            gender
                          </th>
                          <th scope="col" className="px-4 py-2">
                            email
                          </th>
                          <th scope="col" className="px-4 py-2">
                            phone number
                          </th>
                          <th scope="col" className="px-4 py-2">
                            
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-[#FFFFFF] font-primaryMedium">
                          <td className="px-4 py-4">
                            <img src="src/assets/male.png" alt="" />
                          </td>
                          <td className="px-4 py-4">
                            Dion Fernando
                          </td>
                          <td className="px-4 py-4">
                            Male
                          </td>
                          <td className="px-4 py-4">
                            dion342@gmail.com
                          </td>
                          <td className="px-4 py-4">
                            0776342513
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex justify-between">
                              <a href=""><img src="src/assets/edit.png" alt="" /></a>
                              <a href=""><img src="src/assets/delete.png" alt="" /></a>
                            </div>
                          </td>
                      </tr>
                      <tr className="font-primaryMedium">
                          <td className="px-4 py-2">
                            <img src="src/assets/female.png" alt="" />
                          </td>
                          <td className="px-4 py-2">
                            Senoli Edirisinghe
                          </td>
                          <td className="px-4 py-2">
                            Female
                          </td>
                          <td className="px-4 py-2">
                            ediri.senli@gmail.com
                          </td>
                          <td className="px-4 py-2">
                            0715483254
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex justify-between">
                              <a href=""><img src="src/assets/edit.png" alt="" /></a>
                              <a href=""><img src="src/assets/delete.png" alt="" /></a>
                            </div>
                          </td>
                      </tr>
                      <tr className="font-primaryMedium">
                          <td className="px-4 py-2 ">
                            <img src="src/assets/male.png" alt="" />
                          </td>
                          <td className="px-4 py-2">
                            Kenath De Silva
                          </td>
                          <td className="px-4 py-2">
                            Male
                          </td>
                          <td className="px-4 py-2">
                            kenath1996@gmail.com
                          </td>
                          <td className="px-4 py-2">
                            0768978124
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex justify-between">
                              <div>
                              <div onClick={toggleModal}>
                                <img src="src/assets/edit.png" alt="Edit" />
                              </div>
                           
                              </div>
                              
                              <button>
                                <img src="src/assets/delete.png" alt="Delete" />
                              </button>
                            </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

      <div className="flex justify-end mr-[5%] mt-[3%]">
        <img src="src/assets/logOut.png" alt="" className=" cursor-pointer"/>
        <a href="" className="flex items-center pl-4 font-primaryMedium text-[1rem] text-[#FFFFFF] underline">logout</a>
      </div>
    </div>
  </div>
  )
}

export default contacts
