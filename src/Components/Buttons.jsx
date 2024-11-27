import { useState } from "react";
import { Btnlist } from "./Btnlist";
import { useSelector } from "react-redux";

const Buttons = () => {
  const buttonWidth = 100; // Width of each button in px
  const buttonsVisibleCount = 12; // Number of buttons visible at a time
  const sidebarVisible = useSelector((state) => state.app.isMenuOnline); // Access Redux state for sidebar visibility

  const [scrollPosition, setScrollPosition] = useState(0); // Track the scroll position
  const maxScroll = (Btnlist.length - buttonsVisibleCount) * buttonWidth; // Max scroll position

  // Scroll the buttons to the left
  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - buttonWidth, 0)); // Prevent going past the left
  };

  // Scroll the buttons to the right
  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + buttonWidth, maxScroll)); // Prevent going past the right
  };

  return (
    <div className="relative w-full mt-20 z-10 ">
      {" "}
      {/* Button container with a lower z-index */}
      {/* Left Arrow Button, initially hidden */}
      {scrollPosition > 0 && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
        >
          {"<"}
        </button>
      )}
      {/* Scrollable container for the buttons */}
      <div
        // className=" overflow-hidden grid col-span-2"
        className={` ${
          sidebarVisible ? "overflow-hidden " : "overflow-hidden ml-40"
        } `}
        style={{
          width: sidebarVisible ? "1264px" : "1359px",
        }}
      >
        <div
          className="flex transition-transform bg-inherit"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {Btnlist.map((button, index) => (
            <button
              key={index}
              className="bg-slate-300 rounded-lg cursor-pointer p-2 mx-1 my-2"
              style={{ minWidth: `${buttonWidth}px` }} // Button width
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      {/* Right Arrow Button, always visible initially */}
      {scrollPosition < maxScroll && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Buttons;
