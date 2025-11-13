import React from "react";
import Navbar from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	const cardsData = [
		{ nombre: "Instalaciones eléctricas", info: "Servicios residenciales y comerciales." },
		{ nombre: "Energía solar", info: "Soluciones sostenibles y rentables." },
		{ nombre: "Smart home", info: "Automatiza tu hogar con tecnología inteligente." },
		{ nombre: "Mantenimiento", info: "Prevención y corrección de fallas eléctricas." }
	];

	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="container mt-4 mb-5">
				<div className="row justify-content-center">
					{cardsData.map((item, index) => (
						<div key={index} className="col-lg-3 col-md-6 col-12 mb-4 d-flex justify-content-center">
							<Card nombre={item.nombre} info={item.info} />
						</div>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
