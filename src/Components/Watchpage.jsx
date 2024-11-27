import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sidebarhide } from "./Utils/sidebarslice";
import { useDispatch } from "react-redux";
import Comments from "./Comments";
import Livechat from "./Livechat";
const Watchpage = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sidebarhide());
    window.scrollTo(10, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="w-full ">
      <div className="flex w-full ">
        <div className=" ml-10 my-20 ">
          <iframe
            className="rounded-3xl shadow-2xl"
            width="1000"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <Livechat />
      </div>
      <div className="w-fit">
        {" "}
        <Comments />
      </div>
    </div>
  );
};
export default Watchpage;
