import { useEffect, useState } from "react";
import { youtubeapi } from "./apikey";
import Cardfetch, { Newaddcomponent } from "./Cardfetch";
import { Link } from "react-router-dom";
const VideosCard = () => {
  const [Card, setCard] = useState([]);
  useEffect(() => {
    apicall();
  }, []);
  const apicall = async () => {
    const data = await fetch(youtubeapi);
    const json = await data.json();
    // console.log(json.items);
    setCard(json.items);
  };
  return (
    <div className="flex flex-wrap  items-center justify-center">
      {Card[0] && <Newaddcomponent info={Card[0]} />}{" "}
      {/*High order function render like youtube ads //newaddcomponent  */}
      {Card.map((Card) => (
        <Link to={"/watch?v=" + Card.id} key={Card.id}>
          <Cardfetch info={Card} />
        </Link>
      ))}
    </div>
  );
};
export default VideosCard;
