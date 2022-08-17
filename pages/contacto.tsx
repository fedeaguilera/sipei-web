import { NextPage } from "next";
import Banner from "../components/contacto/Banner";
import Form from "../components/contacto/Form";

interface ContactoProps {}

const Contacto: NextPage<ContactoProps> = () => {
	return (
		<>
			<Banner />
			<Form />
		</>
	);
};

export default Contacto;
