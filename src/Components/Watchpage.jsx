import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sidebarhide } from "./Utils/sidebarslice";
import { useDispatch } from "react-redux";

const Watchpage = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sidebarhide());
  }, []);
  return (
    <div className=" ml-20 my-10 ">
      <iframe
        className="rounded-3xl shadow-2xl"
        width="1000"
        height="550"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Watchpage;
