import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div id="App" className="rounded-[20px] border m-[8px] h-[862px]">
      <div className="h-[844px] m-2 rounded-[20px] bg-right bg-no-repeat bg-[length:35%_100%] bg-[url('../public/background.webp')]">
        <div>
          <div className="width-[100%] grid grid-cols-3 gap-auto py-[40px] px-[24px]">
            <button className="max-w-fit"><img src="https://framerusercontent.com/images/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg"/></button>
            <div className="max-w-fit">
              <button className="py-[6px] px-[16px] mr-[12px] rounded-full hover:bg-gray-100">Product</button>
              <button className="py-[6px] px-[16px] mr-[12px] rounded-full hover:bg-gray-100">Compare</button>
              <button className="py-[6px] px-[16px] mr-[12px] rounded-full hover:bg-gray-100">Pricing</button>
              <button className="py-[6px] px-[16px] mr-[12px] rounded-full hover:bg-gray-100">Contact</button>
            </div>
            <div className="max-w-fit justify-self-end	">
              <button className="py-[6px] px-[16px] mr-[12px] rounded-full border border-black bg-transparent text-black hover:bg-black hover:text-white">Login</button>
              <button className="py-[6px] px-[16px] mr-[12px] rounded-full bg-black text-white">Let's Talk</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-[50px] px-[16px] gap-4 space-around">
          <motion.div
            initial={{ y: "1%", opacity: 0, scale: 0.99 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 1 }} className="h-screen w-[600px] justify-self-end">
            <div className="border border-[#e1e2e5] w-fit py-[10px] px-[16px] rounded-full text-sm">Financial Management</div>
            <div className="text-[88px] font-semibold leading-[1.1em] mt-[24px]">A simple, smarter basic credit <span className="text-transparent	bg-clip-text bg-gradient-to-r from-[#67e9f0] to-[#a785fe]">card.</span></div>
            <div className="font-[16px] mt-[12px]">Your powerful companion on the road to financial success! Explore personal budget management, investment opportunities.</div>
            <div className="flex font-normal items-center gap-4 mt-[40px]">
              <button className="bg-black text-[#FFF] py-[14px] px-[16px] rounded-full flex items-center"><img src="https://framerusercontent.com/images/fVUy1acoLQhx2VAjG9IQqEBgQ.svg" />App Store</button>
              <div className="flex min-w-fit h-[40px]">
                <img width={40} className="rounded-full border bg-white" src='https://framerusercontent.com/images/mjpixPbzIMix5MtxX2IOrVDtKA.png' />
                <img width={40} className="rounded-full border bg-white -ml-[10px]" src='https://framerusercontent.com/images/ChLTRKDcxHYxLN5gf9LJPecpk8.png' />
                <img width={40} className="rounded-full border bg-white -ml-[10px]" src='https://framerusercontent.com/images/8TysGUZ0I12C6YWxZUdhVfEus.png' />
              </div>
              <div className="min-w-fit">
                <div className="text-[16px] font-semibold">24K+</div>
                <div className="text-[12px] font-normal">Active User</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: "1%", opacity: 0, scale: 0.9 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}  className="w-[600px] justify-self-end">
            <div>
              <img src='https://framerusercontent.com/images/1JFj3FwlaG94oqSBTQUOdyY6nHA.png' className="w-[430px]" />
            </div>
            <div className="z-10 absolute h-[188px] -mt-[188px] w-[425px] bg-gradient-to-b from-[rgb(255,255,255,0)] to-[rgba(255,255,255)]">
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
