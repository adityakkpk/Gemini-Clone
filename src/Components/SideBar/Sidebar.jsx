import { history, menuSVG, message, plusSVG, question, settings } from "../../assets";
import { useState } from "react";

const Sidebar = () => {

  const [extended, setExtended] = useState(false);

  return (
    <div className="min-h-lvh inline-flex flex-col justify-between bg-[#f0f0f9] py-[25px] px-[12px] duration-200">
      <div>
        <img src={menuSVG} onClick={() => setExtended(prev => !prev)} className="w-[20px] block ml-[10px] cursor-pointer" alt="menu-icon" />
        <div className="mt-12 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] rounded-full text-sm text-gray-600 cursor-pointer">
            <img src={plusSVG} className="w-[20px]" alt="new-chat-icon" />
            {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? <div className="flex flex-col">
            <p className="mt-8 mb-8">Recent</p>
            <div className="flex items-start justify-center pb-4 pt-3 px-4 pr-10 gap-3 rounded-full cursor-pointer hover:bg-[#e2e6eb] duration-200 text-gray-600">
                <img src={message} className="w-[20px] mt-[2px]" alt="message-icon" />
                <p>What is React?</p>
            </div>
        </div>
      : null}
      </div>

      <div className="flex flex-col">
        <div className={`bottom-item flex items-start p-3 ${extended ? "pr-10 gap-3" : null} rounded-full cursor-pointer hover:bg-[#e2e6eb] duration-200 text-gray-600`}>
          <img src={question} className="w-[20px] mt-[2px]" alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className={`bottom-item flex items-start p-3 ${extended ? "pr-10 gap-3" : null} rounded-full cursor-pointer hover:bg-[#e2e6eb] duration-200 text-gray-600`}>
          <img src={history} className="w-[20px] mt-[2px]" alt="" />
          {extended ? <p>History</p> : null}
        </div>
        <div className={`bottom-item flex items-start p-3 ${extended ? "pr-10 gap-3" : null} rounded-full cursor-pointer hover:bg-[#e2e6eb] duration-200 text-gray-600`}>
          <img src={settings} className="w-[20px] mt-[2px]" alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
