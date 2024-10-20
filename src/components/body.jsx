import React from "react";
import Girl from "../assets/imagecopy.png";
import O from "../assets/o.png";
import i from "../assets/i.png";
const Body = () => {
  return (
    <div className="flex w-[100%] custom-font">
      <div className="flex w-[50%] flex-col ">
        <div className="text-[#F53FA1] p-4 bg-[rgba(245,63,161,0.08)] rounded-md mt-6  w-[224px] ml-[130px] font-semibold " >Gaming Club 2.0 Release</div>
        <div className="flex flex-wrap "> 
          <span className="text-white text-[70px] custom-font ml-[130px]">Have y</span>
          <span><img src={O} alt="O" className="w-[70px] h-[70px] object-contain mt-6 ]" /></span>
          <span className="text-white text-[70px] custom-font ">u ever</span> 
          <br />
          <span className="text-white text-[70px] custom-font ml-[130px] mr-[300px]">tried Night</span>
          <br />
          <span className="text-white text-[70px] custom-font ml-[130px]">Bl</span>
          <span><img src={O} alt="O" className="w-[70px] h-[70px] object-contain mt-6 " /></span>
          <span className="text-white text-[70px] custom-font ">dthirster?</span>
        </div>


        <div className="  mt-12 ml-[130px] text-white rounded-xl bg-[rgba(245,63,161,0.08)]  py-[15px] w-[530px]">
          <div className="flex justify-start ml-5">
            <div className="flex gap-4 justify-center items-center"><img src={i} alt="i" className="w-[40px] h-[40px] " />
              <span className="custom-font">2 Months Trip to Swiss</span></div>
            <div className="ml-[60px] flex gap-4 justify-center items-center custom-font"><img src={i} alt="i" className="w-[40px] h-[40px] " /> 6 Hours Coaching/day</div>
          </div>
          <div className="flex justify-start mt-6 ml-5">
            <div className="flex gap-4 justify-center items-center custom-font"><img src={i} alt="i" className="w-[40px] h-[40px] " />+20000 Attendees</div>
            <div className="ml-[92px] flex gap-4 justify-center items-center custom-font"><img src={i} alt="i" className="w-[40px] h-[40px] " />Many Surprises</div>
          </div>
        </div>
        <div>
          <div className="ml-[130px] ">
             <button className="rounded-3xl bg-[#00ECFF] text-black custom-font p-4 mt-10" >JOIN GAMING!</button>
             <span className="ml-[120px] text-[#00ECFF] custom-font cursor-pointer hover:underline"><a href="" className="href">SEE ALL GAMES</a></span>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={Girl}
          alt="Girl"
          className="w-[600px] h-[1050px] object-contain mt-[-200px] ml-[90px] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] shadow-lg mix-blend-screen brightness-105 contrast-105"
        />
      </div>
    </div>
  );
};

export default Body;
