import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <nav className="navbar">
      <h2>The React Blog</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Nabvar;
