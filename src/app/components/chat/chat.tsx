import React from "react";

const Chat = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col justify-end mx-auto max-w-screen-lg pt-12 px-12">
      <div className="flex justify-end">
        <div className="  ">
          <span className="bg-blue-500/20 text-blue-700 py-3 px-8 rounded-2xl">
            hello
          </span>
        </div>
      </div>
      <div className="  ">
          <span className="bg-green-500/20 text-green-700 py-3 px-8 rounded-2xl">
            hello
          </span>
        </div>

      <div className="h-screen flex flex-col justify-end px-12 mb-6">
        <div className="flex gap-x-3 w-full">
          <input
            type="text"
            placeholder=""
            className="border border-gray-200 p-2  flex-grow rounded-2xl"
          />
          <button className="bg-blue-500 text-white rounded-2xl py-3 px-6">
            send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
