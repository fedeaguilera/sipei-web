import type { NextPage } from "next";
import Banner from "../components/index/Banner";
import Services from "../components/index/Services";

const Home: NextPage = () => {
	return (
		<>
			<Banner />
			<Services />
		</>
	);
};

export default Home;
