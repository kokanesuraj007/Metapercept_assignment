import React from 'react'
import "../cssStyle/Navbar.css"

const Navbar = () => {
    return (
        <div id='navbar'>
            <div id='nlgo'>Title</div>
            <div id='navchild'>
                <div>Home</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div><button>Button</button></div>
            </div>

        </div>
    )
}

export default Navbar;