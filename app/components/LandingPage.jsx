import React from "react";

const LandingPage = () => {
  return (
    <div className="flex pl-[75px]">
      <div id="gradient" className="w-full relative">
        <div className="w-[613px] absolute blur-2xl opacity-35 -top-[332px] right-0 h-[513px] -z-1 border-2 radial-gradient-background"></div>
        <div className="mt-[166px]">
          <h1 className="text-[#9E2349] flex items-center gap-2">
            <hr className="w-4 border-2" />
            Welcome to the
          </h1>
          <h1 className="text-[71px] max-w-[548px] leading-[95px]">
            Unprecedented Era of{" "}
            <span className="text-[#9E2349]">Real Estate Investing</span>
          </h1>
          <p className="max-w-[548px] text-[#aaabab]">
            Lilypads uses sophisticated technologies for data-driven decisions
            in investing, managing and funding commercial real estate assets
          </p>
        </div>
      </div>
      <div className="max-w-[595px] border-2 relative h-[900px]">
        <img className="w-full h-full" src="/Rectangle.png" alt="" />
        <div className="absolute top-0 -left-40 flex items-center gap-10 mt-[142px]">
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
                <hr className="my-3 opacity-20"/>
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
               <hr className="my-3 opacity-20 mt-47"/>
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
               <hr className="my-3 opacity-20"/>
                <div className="w-[286px] h-[60px] absolute bottom-13 rounded-[30px] bg-white px-6 shadow-2xl flex items-center justify-between">
                      <img className="w-6" src="/tab1.png" alt="" />
                       <img className="w-6" src="/tab1.png" alt="" />
                       <img className="w-6" src="/tab1.png" alt="" />
                      <img className="w-6" src="/tab1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
