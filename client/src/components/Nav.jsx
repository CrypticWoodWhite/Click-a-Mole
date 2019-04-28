import React from "react";
import Container from "./Container"

const Nav = ({children}) => {
    return (
        <nav class="navbar">
            <Container>
                <ul class="navbar-list">
                    {children}
                    {/* scores will go here */}
                </ul>
            </Container>
        </nav>
    );
}

export default Nav;