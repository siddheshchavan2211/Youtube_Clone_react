const Cardfetch = ({ info }) => {
  // Destructure the necessary properties from the 'info' object
  const { snippet, statistics } = info || {}; // Safeguard in case info is undefined
  const { channelTitle, title, description, thumbnails, publishedAt } =
    snippet || {};
  const { viewCount, likeCount, commentCount } = statistics || {};

  // Set the default image URL in case the thumbnail is not available
  const thumbnailUrl = thumbnails?.medium?.url || thumbnails?.default?.url;

  // Function to format views into K (thousands) or M (millions)
  const formatViews = (viewCount) => {
    const count = parseInt(viewCount, 10); // Ensure it's an integer
    if (count >= 1_000_000) {
      return (count / 1_000_000).toFixed(1) + "M"; // For millions, e.g., "1.5M"
    } else if (count >= 1_000) {
      return (count / 1000).toFixed(1) + "K"; // For thousands, e.g., "5.2K"
    } else {
      return count; // If under 1000, just return the number
    }
  };

  // Function to format the 'publishedAt' date into "time ago"
  const timeAgo = (date) => {
    const now = new Date();
    const givenDate = new Date(date);

    const seconds = Math.floor((now - givenDate) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return "Just now"; // Less than a minute ago
    } else if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (days < 30) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (months < 12) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div className="w-[410px] bg-white shadow-lg m-2 p-2 rounded-lg">
      {/* Thumbnail Image */}
      <div className="mb-4 flex flex-wrap">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt="Video Thumbnail"
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <p>No Thumbnail Available</p>
        )}
      </div>

      {/* Video Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

      {/* Channel Name */}
      {/* <p className="text-md text-gray-600 mb-2"> {channelTitle}</p> */}

      {/* Video Statistics */}
      <div className="flex text-sm text-gray-500">
        <p className="m-0">
          {formatViews(viewCount)} Views
          <span className="text-wrap px-1 font-bold text-black   ">·</span>
        </p>
        <p className="m-0"> {timeAgo(publishedAt)}</p>
      </div>
    </div>
  );
};
//high order function example
export const Newaddcomponent = ({ info }) => {
  return (
    <div className="border border-blue-950  ">
      <Cardfetch info={info} />
    </div>
  );
};

export default Cardfetch;
