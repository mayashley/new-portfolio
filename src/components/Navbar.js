import React from 'react';
import "../css/navbar.css"

const Navbar = () =>{
    // const [isOpen, setNav] = useState()
    // const toggleNav = () => {
    //   setNav(isOpen => !isOpen)

    return(
<nav>
    <div className="navbarWrapper">
        <a href="/">Home</a>
        <a href="/"> Work</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
    </div>
        </nav>
    )
}
export default Navbar