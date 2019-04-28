import React from "react";

const Image = ({ href, idNumber }) => {
    return (
        <img alt="mole" href={href} id={idNumber} />
    );
};

export default Image;