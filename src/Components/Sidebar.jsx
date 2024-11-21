import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOnline = useSelector((store) => store.app.isMenuOnline);
  if (!isMenuOnline) return null;
  return (
    <div className="w-56 min-w-56 shadow-lg pt">
      <Link to="/">
        {" "}
        <h1>HOME</h1>
      </Link>

      <h1>hello1000000000000111000000</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </div>
  );
};

export default Sidebar;
