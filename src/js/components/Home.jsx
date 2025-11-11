import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
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
			<div className="container mt-5">
				<div className="row">
					{cardsData.map((item, index) => (
						<div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
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

