import { NextPage } from "next";
import Banner from "../components/proyectos/Banner";
import Proyect from "../components/proyectos/Project";

interface ProyectosProps {}

const Proyectos: NextPage<ProyectosProps> = () => {
	return (
		<>
			<Banner />
			<Proyect />
		</>
	);
};

export default Proyectos;
