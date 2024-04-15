import React from 'react'

const login = () => {
  return (
    <div class="loginSection flex items-center h-screen w-full bg-[url('src/assets/Ellipse.png')] bg-no-repeat bg-left">
      <div class="left_side flex flex-1 items-center justify-center">
      <div class="text-left">
        <h1>Hi there,</h1>
        <p>Welcome to our <br/>contacts portal</p>
        <form action="" >
          <input type="text" placeholder='e-mail'/><br /><br />
          <input type="text" placeholder='password'/>
          <br />
          <button>login</button> or <a href="">Click here to Register</a>
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

export default login
