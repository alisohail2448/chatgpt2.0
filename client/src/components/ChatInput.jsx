import React, { useState } from "react";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value == "") return;
    sendMessage({ sender: "user", message: value })
    setValue("");
  };

  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
      {
        loading ? (
          <img src="./dots.gif" alt="" className="w-8 m-auto" />
        ) : (
        <>
            <textarea onKeyDown={(e) => e.keyCode === 13 && e.shiftKey === false && handleSubmit()}
          rows={1}
          className="border-0 bg-transparent outline-none w-11/12"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
  
        <img
          src="./send.png"
          alt="send"
          className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
          onClick={handleSubmit}
        />
        </>
        )
      }
    </div>
  );
};

export default ChatInput;
