import { Outlet, Link } from "react-router-dom";
import '../assets/css/Navbar.css';
const Layout = () => {
  return (
    <>
    <div className="hed">
         <div className="log">
            <h2>D<span>T</span></h2>
         </div>
     
         <u1 className="fgf">
          <li className="lil">
            <Link to="/" className="ght">Home</Link>
          </li>
          <li className="lil">
            <Link to="/about" className="ght">about</Link>
          </li>
          <li className="lil">
            <Link to="/contact" className="ght">Contact</Link>
          </li>
          <li className="lil">
            <Link to="/profile" className="ght">Profile</Link>
          </li>
          <li className="lil">
            <Link to="/user" className="ght">Dasboard</Link>
          </li>
          <li className="lil">
            <Link to="/signup" className="ght">Signin</Link>
          </li>
          
        </u1>
      </div>


      <Outlet />
    </>
  )
};

export default Layout;