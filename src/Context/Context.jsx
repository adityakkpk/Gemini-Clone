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


    const onSent = async (prompt) => {

        setResData("");
        setLoading(true);
        setShowRes(true)
        const response = await run(input);
        setResData(response);
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
