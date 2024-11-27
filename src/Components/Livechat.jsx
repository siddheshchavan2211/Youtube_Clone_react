import { useState } from "react";
import ChatComp from "./ChatComp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./Utils/MessageSlice";
import { Random_String_Api } from "./apikey";
export default function Livechat() {
  const [liveMessage, setlivemessage] = useState();
  const [nameS, setname] = useState();
  const [comm, setcomm] = useState();
  const dispatch = useDispatch();
  const chatSelector = useSelector((store) => store.message.Message);
  //crate use effect add interval then clear interval in add call api pooling and dispatch and action to send data to slice and then
  //subscribe to store and run map function on it to come data at interval

  useEffect(() => {
    const Timer = setInterval(async () => {
      await StringGenerate();

      dispatch(
        addMessage({
          name: nameS,
          comment: comm,
        })
      );
    }, 2000);

    return () => clearInterval(Timer);
  }, [nameS, comm, dispatch]);

  const StringGenerate = async () => {
    const data = await fetch(Random_String_Api);
    const json = await data.json();
    setname(json.quote.author);
    setcomm(json.quote.body.slice(0, 30));
  };
  return (
    <div>
      <div className="ml-6 mt-20 bg-slate-100 w-96 h-[550px] rounded-lg border border-black   flex flex-col-reverse overflow-y-scroll ">
        {chatSelector.map((e, i) => {
          return <ChatComp key={i} name={e.name} comment={e.comment} />;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Siddhesh Chavan",
              comment: liveMessage,
            })
          );
          setlivemessage("");
        }}
        className="w-96 border border-black h-14 ml-6 rounded-lg  "
      >
        <input
          className="w-72 m-2 p-1 ml-6 rounded-full pl-2 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => setlivemessage(e.target.value)}
        />
        <button className="bg-slate-100 p-2 rounded-full">send</button>
      </form>
    </div>
  );
}
