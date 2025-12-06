"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for menu and close

const Header = () => {
  // State to control the visibility of the mobile sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='w-full absolute z-50 top-0 py-[27px] px-5 xl:px-[75px] flex items-center justify-between'>
      {/* 1. Logo Section (Always Visible) */}
      <div className='flex items-center gap-10 xl:gap-20'>
        <img className='w-[90px] h-[54px]' src="/Group 236.png" alt="Logo" />
   

      {/* 2. Desktop Navigation (Hidden on small screens) */}
      <div className='hidden lg:flex items-center gap-4 xl:gap-10 justify-between'>
        <span>Home</span>
        <span>Network</span>
        <span>Product</span>
        <span>Technology</span>
        <span>Our Story</span>
        <span>Knowledge Center</span>
      </div>
       </div>
      {/* 3. Desktop Buttons (Hidden on small screens) */}
      <div className='hidden lg:flex items-center gap-5'>
        <button className='w-[157px] h-[58px] text-white border-2 font-semibold rounded-[20px] border-white'>
          Contact Us
        </button>
        <button className='w-[127px] h-[58px] bg-white text-[#7D59C3] font-semibold border-2 rounded-[20px] border-white'>
          Log In
        </button>
      </div>

      {/* 4. Mobile Menu Toggle Button (Visible only on small screens) */}
      <div className='lg:hidden'>
        <button onClick={toggleSidebar} className='text-[#673ab7] p-2'>
          {isSidebarOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* 5. Mobile Sidebar Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-[#7D59C3] text-white p-6
          transform transition-transform duration-300 ease-in-out z-40
          lg:hidden
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button is handled by the toggle button above, but you can add one here too */}
        <div className='flex justify-end mb-10'>
          <button onClick={toggleSidebar} className='text-white'>
            <X size={30} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className='flex flex-col gap-6 text-xl'>
          <span onClick={toggleSidebar} className='hover:opacity-70 cursor-pointer'>Home</span>
          <span onClick={toggleSidebar} className='hover:opacity-70 cursor-pointer'>Network</span>
          <span onClick={toggleSidebar} className='hover:opacity-70 cursor-pointer'>Product</span>
          <span onClick={toggleSidebar} className='hover:opacity-70 cursor-pointer'>Technology</span>
          <span onClick={toggleSidebar} className='hover:opacity-70 cursor-pointer'>Our Story</span>
          <span onClick={toggleSidebar} className='hover:opacity-70 cursor-pointer'>Knowledge Center</span>
        </div>

        {/* Mobile Buttons */}
        <div className='flex flex-col gap-4 mt-10'>
          <button className='w-full h-12 text-white border-2 font-semibold rounded-[15px] border-white'>
            Contact Us
          </button>
          <button className='w-full h-12 bg-white text-[#7D59C3] font-semibold border-2 rounded-[15px] border-white'>
            Log In
          </button>
        </div>
      </div>
      
      {/* 6. Overlay (Optional: for darkening background when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        />
      )}
    </div>
  );
};

export default Header;