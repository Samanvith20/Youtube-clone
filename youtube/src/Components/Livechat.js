import React, { useEffect, useState } from 'react';
import Chatmessage from './Chatmessage';
import { useDispatch, useSelector } from 'react-redux';
import { addmessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/Helper';

const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [userName, setUserName] = useState("Samanvith"); 

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addmessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <Chatmessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addmessage({
              name: userName,
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          placeholder="Enter Your Text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />

        
        <input
          className="px-2 w-96"
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default Livechat;