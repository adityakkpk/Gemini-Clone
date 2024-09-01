import {
  history,
  menuSVG,
  message,
  plusSVG,
  question,
  settings,
} from "../../assets";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className="min-h-lvh hidden sm:inline-flex flex-col justify-between bg-[#f0f0f9] py-[25px] px-[12px] duration-200">
      <div>
        <img
          src={menuSVG}
          onClick={() => setExtended((prev) => !prev)}
          className="w-[20px] block ml-[10px] cursor-pointer"
          alt="menu-icon"
        />
        <div onClick={() => newChat()} className="mt-12 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] rounded-full text-sm text-gray-600 cursor-pointer">
          <img src={plusSVG} className="w-[20px]" alt="new-chat-icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="flex flex-col animate-fadeIn">
            <p className="mt-8 mb-8">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                  item && <div onClick={() => loadPrompt(item)} key={index} className="flex items-start pb-4 pt-3 px-4 pr-6 gap-3 rounded-full cursor-pointer hover:bg-[#e2e6eb] duration-200 text-gray-600">
                    <img
                      src={message}
                      className="w-[20px] mt-[2px]"
                      alt="message-icon"
                    />
                    <p className="">{item.slice(0,20)}...</p>
                  </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <div
          className={`bottom-item flex items-start p-3 ${
            extended ? "pr-10 gap-3" : null
          } rounded-full cursor-pointer hover:bg-[#e2e6eb] duration-200 text-gray-600`}
        >
          <img src={question} className="w-[20px] mt-[2px]" alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div
          className={`bottom-item flex items-start p-3 ${
            extended ? "pr-10 gap-3" : null
          } rounded-full cursor-pointer hover:bg-[#e2e6eb] duration-200 text-gray-600`}
        >
          <img src={history} className="w-[20px] mt-[2px]" alt="" />
          {extended ? <p>History</p> : null}
        </div>
        <div
          className={`bottom-item flex items-start p-3 ${
            extended ? "pr-10 gap-3" : null
          } rounded-full cursor-pointer hover:bg-[#e2e6eb] duration-200 text-gray-600`}
        >
          <img src={settings} className="w-[20px] mt-[2px]" alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
