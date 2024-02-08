import Links from "./links/links";
import "./navbar.css"

const Navbar = () => {
    return ( 
<div className="container">
      <div>
      Logo
      </div>
      <div>
      <Links/>
      </div>
    </div>
    )
  };
  
  export default Navbar;