import Image from "next/image";

interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = () => {
	return (
		<section className="max-w-screen-md mx-auto mt-10">
			<div>
				<h1 className="text-2xl border-l-4 border-l-primary pl-2">Servicios</h1>
			</div>
			<div className="flex  ">
				{/* CARDS */}
				<div className="w-1/3 pt-2">
					<Image
						src={"/images/industria.jgp"}
						layout="responsive"
						width={2400}
						height={1598}
					/>
				</div>
				<div>Card 2</div>
			</div>
		</section>
	);
};

export default Services;
