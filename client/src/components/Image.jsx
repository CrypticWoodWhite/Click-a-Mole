import React from "react";

const Image = ({ src, idString }) => {
    return (
        <img alt="mole" src={src} id={idString} />
    );
};

export default Image;