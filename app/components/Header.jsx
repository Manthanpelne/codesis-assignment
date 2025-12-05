import React from 'react'

const Header = () => {
  return (
    <div className='w-full absolute top-0 py-[27px] px-[75px] flex items-center justify-between'>
        <div className='flex items-center  gap-20'>
         <img className='w-[90px] h-[54px]' src="/group 236.png" alt="" />
         <div className='flex items-center gap-10 justify-between'>
            <span>Home</span>
            <span>Network</span>
            <span>Product</span>
            <span>Technology</span>
            <span>Our Story</span>
            <span>Knowledge Center</span>
         </div>
         </div>
         <div>
               <button>Contact Us</button>
               <button>Login</button>
         </div>
    </div>
  )
}

export default Header