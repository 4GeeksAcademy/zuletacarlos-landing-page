import React from "react";

export const Card = (props) => {
    const imageMap = {
        "Instalaciones eléctricas": "https://plus.unsplash.com/premium_photo-1682148175448-8e418fcfbaa7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072",
        "Energía solar": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072",
        "Smart home": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        "Mantenimiento": "https://plus.unsplash.com/premium_photo-1661929137248-2544fd28de13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    };

    return (
        <div className="card h-100 text-center shadow-sm" style={{ width: "18rem" }}>
            <img
                src={imageMap[props.nombre] || "https://via.placeholder.com/200x300"}
                className="card-img-top"
                alt={props.nombre}
            />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.info}</p>
                <a href="#" className="btn btn-primary">Más info</a>
            </div>
        </div>
    );
};
