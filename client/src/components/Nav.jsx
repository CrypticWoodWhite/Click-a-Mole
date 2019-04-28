import React from "react";

const Nav = ({children}) => {
    return (
        <nav class="navbar">
            <div class="container">
                <ul class="navbar-list">
                {children}
                {/* scores will go here */}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;