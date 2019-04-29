import React from "react";

const Image = ({ src, idNumber }) => {
    return (
        <img alt="mole" src={src} key={idNumber} />
    );
};

export default Image;