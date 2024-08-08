"use client";
import { sendPromp } from "@/utils/gemini/sendPromp";
import axios from "axios";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { Comment } from "react-loader-spinner";

function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);

  const handleButton = async () => {
    if (isLoadingResponse == true) return;
    setInputValue("");
    setIsLoadingResponse(true);
    try {
      // const res = await axios.get("/api/hello");
      const res = await axios.post("/api/getGeminiPromp", {
        promp: inputValue,
      });
      const aiRes = res.data.aiResponse;
      console.log(aiRes);
    } catch (e) {
      alert("Try later");
      console.log(e);
    } finally {
      setIsLoadingResponse(false);
    }
    // axios.post()
  };

  return (
    <div className="flex flex-col  justify-between bg-red-400 min-h-screen">
      <div className="min-h-[80vh]"></div>
      <div className="flex">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="input input-bordered w-full mr-2 disabled"
          value={inputValue}
          disabled={isLoadingResponse}
        />
        <button
          onClick={handleButton}
          className=" flex items-center btn btn-primary "
          disabled={isLoadingResponse}
        >
          {isLoadingResponse ? (
            <Comment
              height={"100%"}
              color="#ff0"
              width={"100%"}
              visible={isLoadingResponse}
            />
          ) : (
            <IoSend />
          )}
        </button>
      </div>
    </div>
  );
}

export default Chat;
