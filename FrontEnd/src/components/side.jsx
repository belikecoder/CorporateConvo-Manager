import '../assets/css/dash.css';
import { Link } from 'react-router-dom';
function ASide() {
    return ( 
        <>
        <input type="checkbox" id="menu-toggle" />
      <div className="sidebar">
        <div className="side-header">
          <h3><span>D</span>T</h3>
        </div>

        <div className="side-content">
          <div className="profile">
            <div className="profile-img bg-img" ></div>
            <h4>VIGNESH</h4>
            <small>Admnistrator</small>
          </div>

          <div className="side-menu">
            <ul>
              <li>
                <Link to="/dash" className="active">
                  <span className="las la-home"></span>
                  <small>Dashboard</small>
                </Link>
              </li>
              <li>
                <Link to ="/aprofile">
                  <span className="las la-user-alt"></span>
                  <small>Profile</small>
                </Link>
              </li>
              <li>
                <Link to ="/messages">
                  <span className="las la-user-alt"></span>
                  <small>Messages</small>
                </Link>
              </li>
              <li>
              <Link to ="/adeventtable">
                  <span className="las la-user-alt"></span>
                  <small>Event List</small>
                </Link>
              </li>
           
              <li>
                <Link to="/adimnaddevent">
                  <span className="las la-clipboard-list"></span>
                  <small>Add Event</small>
                </Link>
              </li>
              <li>
                <Link to ="/admineditevent">
                  <span className="las la-clipboard-list"></span>
                  <small>Edit Event</small>
                </Link>
              </li>
              <li>
                <Link to="/addelete">
                  <span className="las la-clipboard-list"></span>
                  <small>Deleted Events</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-content">
        <header>
          <div className="header-content">
            <label  className="le"htmlFor="menu-toggle">
              <span className="las la-bars"></span>
            </label>
            </div>
            </header>
            </div>
        </>
     );
}

export default ASide;