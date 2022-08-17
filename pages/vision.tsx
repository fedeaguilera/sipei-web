import Banner from "../components/vision/Banner";
import Nosotros from "../components/vision/Nosotros";
import Objetivos from "../components/vision/Objetivos";

interface VisionProps {}

const Vision: React.FunctionComponent<VisionProps> = () => {
	return (
		<>
			<Banner />
			<Nosotros />
			<Objetivos />
		</>
	);
};

export default Vision;
