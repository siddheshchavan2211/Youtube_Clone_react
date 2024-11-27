import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const isMenuOnline = useSelector((store) => store.app.isMenuOnline);
  const location = useLocation(); // Get the current page URL from React Router
  const isWatchPage = location.pathname === "/watch"; // Check if the current route is the Watch page

  if (!isMenuOnline) return null;

  return (
    <div
      className={`${
        isWatchPage
          ? "fixed pt-20 left-2 h-full overflow-y-scroll transition-all duration-300 bg-white"
          : "w-56 min-w-56 pt-20 min-h-full bg-white shadow-lg overflow-y-scroll overflow-x-hidden"
      }`}
      style={{
        ...(isWatchPage && { width: "auto" }),
      }}
    >
      {/* Upper Buttons with SVGs */}

      {/* Sidebar links */}
      <Link to="/">
        <h1 className="text-xl font-bold mb-4">HOME</h1>
      </Link>

      {/* Sidebar content */}
      <h1 className="mb-2">Shorts</h1>
      <h1 className="mb-2">Subscriptions</h1>
      <h1 className="mb-2">You</h1>
      <h1 className="mb-2">History</h1>
      <h1 className="mb-2">Playlists</h1>
      <h1 className="mb-2">Your Videos</h1>
      <h1 className="mb-2">Watch Later</h1>
      <h1 className="mb-2">Liked Videos</h1>
      <h1 className="mb-2">Explore</h1>
      <h1 className="mb-2">Trending</h1>
      <h1 className="mb-2">Shopping</h1>
      <h1 className="mb-2">Music</h1>
      <h1 className="mb-2">Films</h1>
      <h1 className="mb-2">Live</h1>
      <h1 className="mb-2">Gaming</h1>
      <h1 className="mb-2">News</h1>
      <h1 className="mb-2">Sport</h1>
      <h1 className="mb-2">Courses</h1>
      <h1 className="mb-2">Fashion & Beauty</h1>
      <h1 className="mb-2">Podcasts</h1>
      <h1 className="mb-2">More from YouTube</h1>
      <h1 className="mb-2">YouTube Premium</h1>
      <h1 className="mb-2">YouTube Studio</h1>
      <h1 className="mb-2">YouTube Music</h1>
      <h1 className="mb-2">YouTube Kids</h1>
      <h1 className="mb-2">Settings</h1>
      <h1 className="mb-2">Report History</h1>
      <h1 className="mb-2">Help</h1>
      <h1 className="mb-2">Send Feedback</h1>
    </div>
  );
};

export default Sidebar;
