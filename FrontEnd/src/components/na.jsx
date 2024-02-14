
          {/* <li className="lil">
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
            <Link to="/dash" className="ght">Dashboard</Link>
          </li>
          <li className="lil">
            <Link to="/signup" className="ght">Signin</Link>
          </li> */}
          
          import { Outlet, Link } from "react-router-dom";
          import '../assets/css/Navbar.css';
          const Layout = () => {
            return (
              <>
                  <header className="hed">
                <nav class="navbar">
                  <h2 class="logo"><Link to ="/" className="gh">TN Events</Link></h2>
                  <input type="checkbox" id="menu-toggler"/>
                  <label for="menu-toggler" id="hamburger-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                  </label>
                  <ul class="all-links">
                  <li className="lil">
            <Link to="/" className="ght">Home</Link>
          </li>
          <li >
            <Link to="/about" className="gh">about</Link>
          </li>
          <li className="lil">
            <Link to="/contact" className="gh" >Contact</Link>
          </li>
          <li>
            <Link to="/signup"className="gh">Signin</Link>
          </li> 
           
                  </ul>
                </nav>
              </header>
          
          
                <Outlet />
              </>
            )
          };
          
          export default Layout;