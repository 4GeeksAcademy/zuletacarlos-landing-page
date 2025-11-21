import React from "react";

export const Jumbotron = () => {
    return (
        <div className="container mt-4">
            <div className="bg-light py-4 text-center rounded">
                <h1 className="fw-bold display-5 mb-3">Bienvenido a WattWise Services ⚡</h1>
                <p className="lead mb-4">
                    Soluciones eléctricas seguras, sostenibles y eficientes para tu hogar o negocio.
                </p>
                <a href="#" className="btn btn-primary btn-lg">
                    Contáctanos.
                </a>
            </div>
        </div>
    );
};
