import type { NextPage } from "next";
import Banner from "../components/index/Banner";
import Presentation from "../components/index/Presentation";
import Services from "../components/index/Services";

const Home: NextPage = () => {
	return (
		<>
			<Banner />
			<Presentation />
			<Services />
		</>
	);
};

export default Home;
