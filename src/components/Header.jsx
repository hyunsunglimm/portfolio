import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex bg-white justify-between p-4 sticky top-0 z-10">
      <Link to="/">{`LIM's PORTFOLIO`}</Link>
      <nav className="flex gap-4">
        <Link to="/detail">DETAIL</Link>
        <Link to="/about">ABOUT</Link>
      </nav>
    </div>
  );
}
