import React from "react";

const Image = ({ src, idNumber }) => {
    return (
        <img alt="mole" src={src} id={idNumber} />
    );
};

export default Image;