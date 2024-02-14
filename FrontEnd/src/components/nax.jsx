import '../assets/css/nax.css'
function Naz() {
    return ( <>
    <header>
      <nav class="navbar">
        <h2 class="logo"><a href="#">LOGO</a></h2>
        <input type="checkbox" id="menu-toggler"/>
        <label for="menu-toggler" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </label>
        <ul class="all-links">
          <li><a href="/">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>

    </> );
}

export default Naz;