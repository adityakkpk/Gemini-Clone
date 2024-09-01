import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([""]);
    const [showRes, setShowRes] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resData, setResData] = useState("");

    const delayPara = (index, nextWord) => {
      setTimeout(function (){
        setResData(prev => prev+nextWord)
      }, 75*index);
    }

    const onSent = async (prompt) => {

        setResData("");
        setLoading(true);
        setShowRes(true);

        let response;
        if(prompt !== undefined) {
          response = await run(prompt);
          setRecentPrompt(prompt);
        } else {
          setRecentPrompt(input);
          response = await run(input);
          setPrevPrompts(prev => [...prev, input]);
        }

        let responseArray = response.split("**");

        let newResponse = "";
        for(let i = 0; i < responseArray.length; i++) {
          if(i === 0 || i%2 !== 1) {
            newResponse += "</br>" + responseArray[i];
          } else {
            newResponse += "</br><b>"+ responseArray[i]  +"</b>";
          }
        }

        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
          const nextWord = newResponseArray[i];
          delayPara(i,nextWord+" ");
        }

        setLoading(false);
        setInput("");
    }

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showRes,
    loading,
    resData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
