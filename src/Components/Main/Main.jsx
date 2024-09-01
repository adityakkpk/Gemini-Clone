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
import "./Main.css";

const Main = () => {
  const { onSent, recentPrompt, showRes, loading, resData, setInput, input } =
    useContext(Context);

    const handleEnterPress = (e) => {
      if(e.key === 'Enter') {
        onSent();
      }
    }

  return (
    <div className="flex-1 min-h-lvh pb-[15vh] relative">
      <nav className="flex items-center justify-between p-5 text-xl text-[#585858]">
        <p>Gemini</p>
        <img
          src="src/assets/user.png"
          className="rounded-full"
          width={`40px`}
        />
      </nav>

      <div className="max-w-5xl flex flex-col justify-center items-center m-auto">
        {!showRes ? (
          <>
            <div className="my-10 md:text-6xl text-4xl text-[#c4c7c5] font-medium p-5">
              <p>
                <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
                  Hello, Developer.
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="hidden sm:grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full p-5">
              <div onClick={() => setInput("Suggest beautiful places to see on an upcoming road trip")} className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] duration-200">
                <p className="text-[#585858] text-lg">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  src={compass}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-3xl bottom-3 right-3"
                />
              </div>
              <div onClick={() => setInput("Briefly summarize this concept: urban planning")} className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] duration-200">
                <p className="text-[#585858] text-lg">
                  Briefly summarize this concept: urban planning
                </p>
                <img
                  src={light}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-3xl bottom-3 right-3"
                />
              </div>
              <div onClick={() => setInput("Brainstorm team bonding activities for our work retreat")} className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] duration-200">
                <p className="text-[#585858] text-lg">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={message}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-3xl bottom-3 right-3"
                />
              </div>
              <div onClick={() => setInput("Tell me about React js and React native")} className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] duration-200">
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
          <div className="w-full result px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="w-full result-title flex my-10 mx-0 items-center gap-5">
              <img
                src="src\assets\user.png"
                alt=""
                className="w-10 rounded-full"
              />
              <p className="text-xl font-light">{recentPrompt}</p>
            </div>
            <div className="w-full result-data flex items-start gap-7">
              <img
                src="src/assets/google-gemini-icon.png"
                alt=""
                className="w-8 rounded-full"
              />
              {loading ? (
                <div className="w-full flex gap-3 flex-col">
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5 bg-contain animate-loader" />
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5 bg-contain animate-loader" />
                  <hr className="rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5 bg-contain animate-loader" />
                </div>
              ) : (
                <>
                  <p dangerouslySetInnerHTML={{ __html: resData }} className="text-xl font-light"></p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-lvh max-w-[900px] p-5 m-auto">
          <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-full">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent outline-none border-none md:p-2 md:text-lg p-0 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => handleEnterPress(e)}
            />
            <div className="flex items-center gap-4 justify-center">
              <img src={gallery} className="md:w-6 w-4 cursor-pointer" />
              <img src={mic} className="md:w-6 w-4 cursor-pointer" />
              {input?<img
                src={send}
                className="md:w-6 w-4 cursor-pointer"
                onClick={() => onSent()}
              />:null}
            </div>
          </div>
          <p className="text-xs md:text-sm mt-4 mx-auto text-center md:font-light font-extralight">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
