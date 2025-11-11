import React from "react";

export const Card = (props) => {
    return (
        <div className="card h-100 text-center shadow-sm" style={{ width: "18rem", margin: "auto" }}>
            <img
                src="https://picsum.photos/300/200"
                className="card-img-top"
                alt={props.nombre}
            />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.info}</p>
                <a href="#" className="btn btn-primary">
                    Más info
                </a>
            </div>
        </div>
    );
};
