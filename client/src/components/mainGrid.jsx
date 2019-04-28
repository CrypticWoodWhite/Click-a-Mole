import React from "react";

export function Container({children}) {
    return(
        <div className="container">
            {children}
        </div>
    );
};

export function Row({children}) {
    return (
        <section className="row">
            {children}
        </section>
    );
};

export function Column({ size, children }) {
    return (
        <section className={{size} + " column"}>
            {children}
        </section>

    );

};