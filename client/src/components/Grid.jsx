import React from "react";

export function Container({ children }) {
    return(
        <div className="container">
            {children}
        </div>
    );
};

export function Row({ idNumber, children }) {
    return (
        <section className="row" id={idNumber}>
            {children}
        </section>
    );
};

export function Column({ size, idNumber, children }) {
    return (
        <section className={{size} + " column"} id={idNumber}>
            {children}
        </section>
    );
};