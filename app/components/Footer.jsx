import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-20 py-10 xl:h-[500px]  bg-[#202221]">
      <div className="max-w-screen-2xl mx-auto py-5 px-4 md:px-20">
        <div className="flex flex-col lg:flex-row gap-20 justify-between">
          <div className=" w-full lg:w-1/2">
            <div className="lg:w-[440px] rounded-[15px] flex items-center justify-between px-2 py-1 h-[55px] border border-white/20">
              <input
                type="text"
                className="placeholder:text-white/20 "
                placeholder="Enter Your Email Here"
              />
              <button className="bg-[#2E302F] rounded-[10px] px-4 py-2 text-white">
                Subscribe To Newsletter
              </button>
            </div>

            <h2 className="font-extrabold mt-20 text-white text-[24px]">
              Signup and start enjoying the benifits today!
            </h2>

            <button className="w-[200px] h-[60px] mt-6 text-sm text-white bg-[#7D59C3] font-semibold  rounded-[20px]">
              Sign Up To Lilypads
            </button>

            <div className="flex items-center gap-1 md:gap-3 mt-8">
              <span className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                <img
                  className="w-[20px] h-[20px]"
                  src="/facebook-circle-fill 1.png"
                  alt=""
                />
              </span>
              <span className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                <img src="/twitter-fill 1.png" alt="" />
              </span>
              <span className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                <img src="/linkedin-fill 1.png" alt="" />
              </span>
              <span className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                <img src="/youtube-fill 1.png" alt="" />
              </span>
              <span className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                <img src="/bxl-medium 1.png" alt="" />
              </span>
              <span className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                <img src="/bxl-pinterest-alt 1.png" alt="" />
              </span>
            </div>
          </div>

          <div className="h-[380px] hidden lg:block w-0 border border-white/20"></div>

          <div className="text-white/40 w-full lg:w-1/2 md:text-[12px] m-auto grid grid-cols-3 gap-x-5 md:gap-x-12 gap-y-8">
              <div>
                  <img className="w-[119px] h-[70px]" src="/group 236.png" alt="" />
              </div>
              <div>
                <h2 className="text-white">React Us At</h2>
                  <p className="">6751 Columbia Gateway Dr. 3rd Floor Columbia. MD 21046</p>
              </div>
               <div></div>
              <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-white">Network</h1>
                 <p>Community</p>
                 <p>Investor</p>
                 <p>Broker</p>
              </div>
                             <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-white">Network</h1>
                 <p>Community</p>
                 <p>Investor</p>
                   <p>Broker</p>
                 <p>Broker</p>
              </div>
                           <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-white">Network</h1>
                 <p>Community</p>
                 <p>Investor</p>
               
              </div>
                <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-white">Network</h1>
                 <p>Community</p>
                 <p>Investor</p>
             
              </div>
                <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-white">Network</h1>
                 <p>Impact of COVID-19 on the food and beverage industry and the retail sector</p>
                 <p>Commercial lending during COVID-19: navigating the impact</p>
              </div>
                           <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-white">Network</h1>
         
                 <p>Investor</p>
                 <p>Broker</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
