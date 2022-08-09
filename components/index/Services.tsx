import Image from "next/image";

interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = () => {
	return (
		<section className="max-w-screen-lg mx-auto mt-10">
			<div>
				<h1 className="text-3xl font-title border-l-4 border-l-primary pl-2">
					SERVICIOS
				</h1>
			</div>
			<div className="flex  ">
				{/* CARDS */}
				<div className="w-1/3   mt-9 m-2">
					<div className="relative">
						<Image
							src={"/images/industria.jpg"}
							layout="responsive"
							width={1996}
							height={1331}
							className="overflow-hidden hover:scale-125 transition-transform duration-700 ease-in-out"
						/>
					</div>
					<div className="p-2 bg-bg_secondary">
						<h3 className=" font-title text-xl text-center">
							Mantenimiento Industrial
						</h3>
						<p className="mt-4 text-center">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
							dolor nostrum ex officia corporis id nam dolores fuga beatae quod,
							voluptates, atque quisquam molestiae magni tenetur esse eum minus
							dolorem.
						</p>
					</div>
				</div>

				<div className="w-1/3   mt-9 m-2">
					<div className="relative">
						<Image
							src={"/images/industria.jpg"}
							layout="responsive"
							width={1996}
							height={1331}
							className="overflow-hidden hover:scale-125 transition-transform duration-700 ease-in-out"
						/>
					</div>
					<div className="p-2 bg-bg_secondary">
						<h3 className=" font-title text-xl text-center">
							Mantenimiento Industrial
						</h3>
						<p className="mt-4 text-center">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
							dolor nostrum ex officia corporis id nam dolores fuga beatae quod,
							voluptates, atque quisquam molestiae magni tenetur esse eum minus
							dolorem.
						</p>
					</div>
				</div>
				<div className="w-1/3   mt-9 m-2">
					<div className="relative">
						<Image
							src={"/images/industria.jpg"}
							layout="responsive"
							width={1996}
							height={1331}
							className="overflow-hidden hover:scale-125 transition-transform duration-700 ease-in-out"
						/>
					</div>
					<div className="p-2 bg-bg_secondary">
						<h3 className=" font-title text-xl text-center">
							Mantenimiento Industrial
						</h3>
						<p className="mt-4 text-center">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
							dolor nostrum ex officia corporis id nam dolores fuga beatae quod,
							voluptates, atque quisquam molestiae magni tenetur esse eum minus
							dolorem.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
