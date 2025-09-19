import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20) + " 🚀",
      }));
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black rounded-lg bg-slate-50 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 border border-gray-300 rounded-lg bg-white flex flex-row gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage.trim()) return;

          dispatch(addMessage({
            name: "Govind",
            message: liveMessage,
          }));

          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Type a message"
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mt-2 p-2 bg-blue-500 text-white rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
