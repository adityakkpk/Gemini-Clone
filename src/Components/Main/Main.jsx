import { useContext } from "react";
import {
  code,
  compass,
  gallery,
  light,
  message,
  mic,
  send,
} from "../../assets/index.js";
import { Context } from "../../Context/Context.jsx";
import "./Main.css"

const Main = () => {
  const { onSent, recentPrompt, showRes, loading, resData, setInput, input } =
    useContext(Context);

  return (
    <div className="flex-1 min-h-lvh pb-[15vh] relative">
      <nav className="flex items-center justify-between p-5 text-xl text-[#585858]">
        <p>Gemini</p>
        <img
          src="src\assets\user.png"
          className="rounded-full"
          width={`40px`}
        />
      </nav>

      <div className="max-w-5xl flex flex-col justify-center items-center m-auto">
        {!showRes ? (
          <>
            <div className="my-12 text-6xl text-[#c4c7c5] font-medium p-5">
              <p>
                <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
                  Hello, Developer.
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full p-5">
              <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] duration-200">
                <p className="text-[#585858] text-lg">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  src={compass}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-3xl bottom-3 right-3"
                />
              </div>
              <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] duration-200">
                <p className="text-[#585858] text-lg">
                  Briefly summarize this concept: urban planning
                </p>
                <img
                  src={light}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-3xl bottom-3 right-3"
                />
              </div>
              <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] duration-200">
                <p className="text-[#585858] text-lg">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={message}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-3xl bottom-3 right-3"
                />
              </div>
              <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] duration-200">
                <p className="text-[#585858] text-lg">
                  Tell me about React js and React native
                </p>
                <img
                  src={code}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-3xl bottom-3 right-3"
                />
              </div>
            </div>
          </>
        ) : (
          <div className='result px-[5%] max-h-[70vh] overflow-y-scroll'>
            <div className="result-title flex my-10 mx-0 items-center gap-5">
              <img src="src\assets\user.png" alt="" className="w-10 rounded-full" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
              <img src="src\assets\google-gemini-icon.png" alt="" className="w-8 rounded-full" />
              <p dangerouslySetInnerHTML={{__html:resData}}></p>
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-lvh max-w=[900x] p-5 m-auto">
          <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-full">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent outline-none border-none p-2 text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex items-center gap-4 justify-center">
              <img src={gallery} alt="" className="w-6 cursor-pointer" />
              <img src={mic} alt="" className="w-6 cursor-pointer" />
              <img
                src={send}
                alt=""
                className="w-6 cursor-pointer"
                onClick={() => onSent()}
              />
            </div>
          </div>
          <p className="text-sm my-4 mx-auto text-center font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
