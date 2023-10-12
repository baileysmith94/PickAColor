import { Link } from "react-router-dom";

const NavBar = () => {

    // Link
    return (
        <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/mystery">Mystery</Link>
      </div>
      
    );
};
  
  export default NavBar;