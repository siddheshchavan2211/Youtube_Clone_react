import { useEffect, useState } from "react";
import { useSearch } from "./SearchContext"; // Import the context hook
import { Link } from "react-router-dom";
import Cardfetch, { Newaddcomponent } from "./Cardfetch"; // Assume you have a component that renders the video cards
import { youtubeapi } from "./apikey";
import { useSelector } from "react-redux";

const VideosCard = () => {
  const [Card, setCard] = useState([]); // Fetched cards
  const [filtersearch, setfiltersearch] = useState([]);
  const sidebarVisible = useSelector((state) => state.app.isMenuOnline); // Access Redux state for sidebar visibility

  const { searchTerm } = useSearch(); // Get the search term from context

  useEffect(() => {
    apicall();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredData = searchfunction(searchTerm, Card);
      setfiltersearch(filteredData);
    } else {
      setfiltersearch(Card); // Show all when search is cleared
    }
  }, [searchTerm, Card]);

  const apicall = async () => {
    const data = await fetch(youtubeapi);
    const json = await data.json();
    setCard(json.items);
    setfiltersearch(json.items);
    // console.log(json.items);
  };

  const searchfunction = (term, data) => {
    return data.filter((video) =>
      video?.snippet?.title?.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <div
      className={`${
        sidebarVisible
          ? "ml-56 flex flex-wrap items-center justify-center mt-12 "
          : "flex flex-wrap items-center justify-center mt-12"
      }`}
    >
      {Card[0] && <Newaddcomponent info={Card[0]} />}{" "}
      {/* High order function render like youtube ads */}
      {filtersearch.map((Card) => (
        <Link to={"/watch?v=" + Card.id} key={Card.id}>
          <Cardfetch info={Card} />
        </Link>
      ))}
    </div>
  );
};

export default VideosCard;
