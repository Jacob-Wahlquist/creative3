import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Races">Races</Link>
          </li>
          <li>
            <Link to="/Backgrounds">Backgrounds</Link>
          </li>
          <li>
            <Link to="/Weapons">Weapons</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;