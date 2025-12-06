import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col  xl:flex-row bg-white  overflow-hidden">
        <div id="gradient" className="w-full px-5 md:px-[75px] relative">
          <div className="w-[613px] absolute blur-2xl opacity-35 -top-[332px] right-0 h-[513px] -z-1 border-2 radial-gradient-background"></div>
          <div className="mt-[126px] xl:mt-[166px]">
            <h1 className="text-[#9E2349] flex items-center gap-2">
              <hr className="w-4 border-2" />
              Welcome to the
            </h1>
            <h1 className=" text-5xl md:text-6xl xl:text-[71px] max-w-[548px] leading-[70px] md:leading-[95px]">
              Unprecedented Era of{" "}
              <span className="text-[#9E2349]">Real Estate Investing</span>
            </h1>
            <p className="max-w-[548px] text-[#aaabab] mt-4">
              Lilypads uses sophisticated technologies for data-driven decisions
              in investing, managing and funding commercial real estate assets
            </p>
          </div>
          <button className="w-full md:w-[271px] h-[60px] mt-6 lg:mt-14 text-white bg-[#7D59C3] font-semibold border-2 rounded-[20px] border-white">
            Start Investing Now →{" "}
          </button>

          <div className="flex mt-8 lg:mt-20 items-center justify-between lg:w-[500px] xl:max-w-[630px]">
            <div>
              <p className="text-[#7C5AC7] font-bold text-xl lg:text-[36px]">658+</p>
              <span>Properties Registered</span>
            </div>
            <div>
              <p className="text-[#7C5AC7] font-bold text-xl lg:text-[36px]">685+</p>
              <span>Deals Cracked</span>
            </div>
            <div className="">
              <p className="text-[#7C5AC7] font-bold text-xl lg:text-[36px]">255+</p>
              <span className="">Investors</span>
            </div>
          </div>
        </div>

        <div className="xl:w-[695px] mt-10 md:mt-20 xl:mt-0 relative md:h-[900px]">
          <img className="hidden lg:block w-full h-full" src="/Rectangle.png" alt="" />
          <div className="lg:absolute top-0  xl:-left-40 flex flex-col md:flex-row items-center justify-center gap-4 mt-10 xl:mt-[142px]">
            <div
              className="w-[388px] h-[756px] p-4 rounded-[75px] relative"
              style={{
                // 1. Define the background image (the gradient) for the border
                backgroundImage:
                  "linear-gradient(rgb(196 196 196 / 40%) 40%, #c4c4c4)",
                // 2. Hide the background image from the content area
                backgroundClip: "padding-box, border-box",
                // 3. Set the actual border (it must be solid and transparent)
                border: "15px solid transparent",
                // 4. Set the background origin to cover the border, allowing the gradient to show
                backgroundOrigin: "border-box",
                // --- Shadow Removed ---
                boxShadow: "none",
              }}
            >
              <div className="rounded-[50px] w-[325px] py-6 px-4 h-[693px]  p-4 bg-white">
                <h2 className="font-bold mb-3">Investments</h2>
                <div>
                  <div className="flex justify-between gap-4">
                    <img
                      className="w-24 h-[114px]"
                      src="/Rectangle 2641.png"
                      alt=""
                    />
                    <div>
                      <h3 className="font-bold mb-1">Aurora</h3>
                      <p className="text-[12px] mb-1">
                        164 S.carson court newport news,VA 23601
                      </p>
                      <div className="flex mb-2 justify-between">
                        <svg
                          className="w-[35px] h-[11px] mt-3"
                          viewBox="0 0 38 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.09558 11.6398C1.09558 11.6398 4.15401 5.97036 7.66783 7.92249C11.1817 9.87462 11.6371 11.6398 14.7605 10.4685C17.8839 9.29725 18.0794 -0.60189 20.8123 1.35024C23.5453 3.30236 30.2912 7.20661 36.1476 1.35024"
                            stroke="#37B369"
                            stroke-width="2.19075"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p className="text-sm">
                          <span className="font-semibold">+ 3,5%</span>Yield
                        </p>
                      </div>
                      <img
                        className="w-[178px] h-4.5"
                        src="/Group 21215.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 items-center">
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                  </div>
                </div>
                <hr className="my-3 opacity-20" />
                <div className="absolute top-59 -left-6 w-[330px] p-3 rounded-2xl shadow-lg bg-white">
                  <div className="flex justify-between gap-4">
                    <img
                      className="w-24 h-[114px]"
                      src="/Rectangle 2641.png"
                      alt=""
                    />
                    <div>
                      <h3 className="font-bold mb-1">Aurora</h3>
                      <p className="text-[12px] mb-1">
                        164 S.carson court newport news,VA 23601
                      </p>
                      <div className="flex mb-2 justify-between">
                        <svg
                          className="w-[35px] h-[11px] mt-3"
                          viewBox="0 0 38 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.09558 11.6398C1.09558 11.6398 4.15401 5.97036 7.66783 7.92249C11.1817 9.87462 11.6371 11.6398 14.7605 10.4685C17.8839 9.29725 18.0794 -0.60189 20.8123 1.35024C23.5453 3.30236 30.2912 7.20661 36.1476 1.35024"
                            stroke="#37B369"
                            stroke-width="2.19075"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p className="text-sm">
                          <span className="font-semibold">+ 3,5%</span>Yield
                        </p>
                      </div>
                      <img
                        className="w-[178px] h-4.5"
                        src="/Group 21215.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 items-center">
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                  </div>
                </div>
                <hr className="my-3 opacity-20 mt-47" />
                <div>
                  <div className="flex justify-between gap-4">
                    <img
                      className="w-24 h-[114px]"
                      src="/Rectangle 2641.png"
                      alt=""
                    />
                    <div>
                      <h3 className="font-bold mb-1">Aurora</h3>
                      <p className="text-[12px] mb-1">
                        164 S.carson court newport news,VA 23601
                      </p>
                      <div className="flex mb-2 justify-between">
                        <svg
                          className="w-[35px] h-[11px] mt-3"
                          viewBox="0 0 38 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.09558 11.6398C1.09558 11.6398 4.15401 5.97036 7.66783 7.92249C11.1817 9.87462 11.6371 11.6398 14.7605 10.4685C17.8839 9.29725 18.0794 -0.60189 20.8123 1.35024C23.5453 3.30236 30.2912 7.20661 36.1476 1.35024"
                            stroke="#37B369"
                            stroke-width="2.19075"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p className="text-sm">
                          <span className="font-semibold">+ 3,5%</span>Yield
                        </p>
                      </div>
                      <img
                        className="w-[178px] h-4.5"
                        src="/Group 21215.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 items-center">
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                    <div>
                      <p className="text-black/50 text-sm">Committed</p>
                      <span className="text-sm">$219.278</span>
                    </div>
                  </div>
                  <hr className="my-3 opacity-20" />
                  <div className="w-[286px] h-[60px] absolute bottom-13 rounded-[30px] bg-white px-6 shadow-2xl flex items-center justify-between">
                    <img className="w-6" src="/tab1.png" alt="" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-black/20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-black/20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-black/20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[388px] h-[756px] p-4 rounded-[75px] relative"
              style={{
                // 1. Define the background image (the gradient) for the border
                backgroundImage:
                  "linear-gradient(rgb(196 196 196 / 40%) 40%, #c4c4c4)",
                // 2. Hide the background image from the content area
                backgroundClip: "padding-box, border-box",
                // 3. Set the actual border (it must be solid and transparent)
                border: "15px solid transparent",
                // 4. Set the background origin to cover the border, allowing the gradient to show
                backgroundOrigin: "border-box",
                // --- Shadow Removed ---
                boxShadow: "none",
              }}
            >
              <div className="bg-white h-full rounded-[50px]">
                <img
                  className="w-full rounded-t-[50px]"
                  src="/Rectangle 2597.png"
                  alt=""
                />
                <div className="flex items-center gap-2 absolute top-29">
                  <img className="w-[112px]" src="/ellipse 38.png" alt="" />
                  <div className="pt-7">
                    <h3>Julie Craig</h3>
                    <p className="text-black/30">Invester</p>
                  </div>
                </div>
                <div className="flex items-center h-[84px] mt-16">
                  <div className="bg-[#F2EFF9] h-full w-1/2 flex items-center justify-center gap-2">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white">
                      <img
                        className="w-[21px] h-[21px]"
                        src="/brief.png"
                        alt=""
                      />
                    </div>
                    <div className="leading-5">
                      <p className="text-[#7D59C3] font-bold">68</p>
                      <span>Deals</span>
                    </div>
                  </div>
                  <div className="bg-[#EBF8F0] w-1/2 h-full flex items-center justify-center gap-2">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white">
                      <img
                        className="w-[21px] h-[21px]"
                        src="/userheart.png"
                        alt=""
                      />
                    </div>
                    <div className="leading-5">
                      <p className="text-[#40875b] font-bold">80%</p>
                      <span>Match</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center h-[84px] mt-5">
                  <div className="bg-[#F2EFF9] h-full w-1/2 flex flex-col px-4 justify-center ">
                    <p className="text-[21px] font-bold">$ 350,000</p>
                    <span className="text-black/50 text-sm">Borrowed</span>
                  </div>
                  <div className="bg-[#F2EFF9] h-full w-1/2 flex flex-col  px-4 items-start justify-center ">
                    <p className="text-[21px] font-bold">
                      $ 184,000{" "}
                      <span className="text-[#40875b] text-sm">62%</span>
                    </p>
                    <span className="text-black/50 text-sm">Paid</span>
                  </div>
                </div>

                <div className="flex items-center h-[84px] mt-2">
                  <div className=" h-full w-1/2 flex flex-col px-4 justify-center ">
                    <p className="text-[21px] font-bold">
                      $ 350,000{" "}
                      <span className="text-[#40875b] text-sm">38%</span>
                    </p>
                    <span className="text-black/50 text-sm">Earned</span>
                  </div>
                  <div className="h-full w-1/2 flex flex-col items-start px-4 justify-center ">
                    <p className="text-[21px] font-bold">
                      12 <span className="text-black/30 text-sm">Months</span>
                    </p>
                    <span className="text-black/50 text-sm">Loan Term</span>
                  </div>
                </div>

                <hr className="mb-3 opacity-15 w-[90%] m-auto" />

                <div className="flex items-center justify-between px-2 ">
                  <div className="collaborators flex">
                    <img
                      className="h-12 w-12 rounded-full object-cover relative z-40"
                      src="/avatar-1.png"
                      alt="Collaborator 1"
                    />

                    <img
                      className="h-12 w-12 rounded-full  object-cover -ml-4 relative z-30 transition-transform duration-300 hover:z-50 hover:scale-105"
                      src="/avatar-2.png"
                      alt="Collaborator 2"
                    />

                    <img
                      className="h-12 w-12 rounded-full  object-cover -ml-4 relative z-20 transition-transform duration-300 hover:z-50 hover:scale-105"
                      src="/avatar-3.png"
                      alt="Collaborator 3"
                    />

                    <img
                      className="h-12 w-12 rounded-full object-cover -ml-4 relative z-10 transition-transform duration-300 hover:z-50 hover:scale-105"
                      src="/avatar-4.png"
                      alt="Collaborator 4"
                    />
                    <img
                      className="h-12 w-12 rounded-full object-cover -ml-4 relative z-10 transition-transform duration-300 hover:z-50 hover:scale-105"
                      src="/avatar-5.png"
                      alt="Collaborator 4"
                    />
                    <span className="h-10 w-10 rounded-full border-2 text-xs flex items-center justify-center text-[#7D59C3] border-purple-500 object-cover -ml-4 mt-0.5 relative z-1 transition-transform duration-300 hover:z-50 hover:scale-105">
                      +14
                    </span>
                  </div>
                  <span className="text-black/50 text-sm">
                    19 Collaborators
                  </span>
                </div>

                <div className="w-[276px] m-auto mt-16 h-[60px] rounded-[30px] bg-white px-6 shadow-2xl flex items-center justify-between">
                  <img className="w-6" src="/tab1.png" alt="" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-black/20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-black/20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-black/20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   <div className="w-full px-6 lg:px-[75px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        
        {/* About Us Heading Block (Top-left position) */}
        <div
          className="
            relative px-4 py-5 mb-8 lg:mb-0
            lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-full lg:after:h-[2px]
            lg:after:bg-[linear-gradient(to_left,black,white)]
            lg:before:content-[''] lg:before:absolute lg:before:right-0 lg:before:top-0 lg:before:w-[1.5px] lg:before:h-full
            lg:before:bg-[linear-gradient(to_top,black,white)] /* Making this vertical line lighter by changing black to the primary color or a lighter gray */
          "
        >
          <h1 className="text-[#9E2349] mb-2 flex items-center gap-2 text-lg">
            <hr className="w-4 border-2" />
            About Us
          </h1>
          <h2 className="text-[28px] md:text-[36px] font-semibold">
            Lillypad is the only Real Estate Investment tool you need for your
            business
          </h2>
        </div>
        
        {/* Feature Block 1 */}
        <div
          className="
            relative px-8 pt-4 pb-5 mb-8 lg:mb-0
            lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-full lg:after:h-[2px]
            lg:after:bg-[linear-gradient(to_right,black,black)]
            lg:before:content-[''] lg:before:absolute lg:before:right-0 lg:before:top-0 lg:before:w-[2px] lg:before:h-full
            lg:before:bg-[linear-gradient(to_top,black,white)]
          "
        >
          <div className="flex gap-4 items-center mb-4">
            <span className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shadow-xl flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <img src="/1.png" className="w-[40px] md:w-[50px]" alt="Icon" />
            </span>
            <h3 className="text-[18px] font-semibold">
              Become a Data-Driven Investor
            </h3>
          </div>
          <p className="text-black/70 max-w-full">
            Lilypads is the cloud-based real estate investment platform that
            helps you make data-driven investment decisions and assists with
            reaching your long term investment objectives.
          </p>
        </div>
        
        {/* Feature Block 2 */}
        <div
          className="
            relative px-8 pt-4 pb-5 mb-8 lg:mb-0
            lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-full lg:after:h-[2px]
            lg:after:bg-[linear-gradient(to_right,black,white)]
          "
        >
          <div className="flex gap-4 items-center mb-4">
            <span className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shadow-xl flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <img src="/1.png" className="w-[40px] md:w-[50px]" alt="Icon" />
            </span>
            <h3 className="text-[18px] font-semibold">
             Lilypads can help you make smarter decisions.
            </h3>
          </div>
          <p className="text-black/70 max-w-full">
          Streamline your investment evaluation process and collaborate in reaching your long term investment objectives
          </p>
        </div>
        
        {/* Feature Block 3 */}
        <div
          className="
            relative px-8 pt-4 pb-5 mb-8 lg:mb-0
            lg:before:content-[''] lg:before:absolute lg:before:right-0 lg:before:top-0 lg:before:w-[1.5px] lg:before:h-full
            lg:before:bg-[linear-gradient(to_bottom,black,white)]
          "
        >
          <div className="flex gap-4 items-center mb-4">
            <span className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shadow-xl flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <img src="/1.png" className="w-[40px] md:w-[50px]" alt="Icon" />
            </span>
            <h3 className="text-[18px] font-semibold">
        Manager Due Diligence
            </h3>
          </div>
          <p className="text-black/70 max-w-full">
          Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis. All it takes is a set of returns
          </p>
        </div>
        
        {/* Feature Block 4 */}
        <div
          className="
            relative px-8 pt-4 pb-5 mb-8 lg:mb-0
            lg:before:content-[''] lg:before:absolute lg:before:right-0 lg:before:top-0 lg:before:w-[2px] lg:before:h-full
            lg:before:bg-[linear-gradient(to_bottom,black,white)]
          "
        >
          <div className="flex gap-4 items-center mb-4">
            <span className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shadow-xl flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <img src="/1.png" className="w-[40px] md:w-[50px]" alt="Icon" />
            </span>
            <h3 className="text-[18px] font-semibold">
             Optimize Asset Allocation
            </h3>
          </div>
          <p className="text-black/70 max-w-full">
          Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors  and then optimize that portfolio based on objectives
          </p>
        </div>
        
        {/* Feature Block 5 */}
        <div className="px-8 pt-4 pb-5 mb-8 lg:mb-0">
          <div className="flex gap-4 items-center mb-4">
            <span className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shadow-xl flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <img src="/1.png" className="w-[40px] md:w-[50px]" alt="Icon" />
            </span>
            <h3 className="text-[18px] font-semibold">
             Our Subscribers
            </h3>
          </div>
          <p className="text-black/70 max-w-full">
          Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
