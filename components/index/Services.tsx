import Image from "next/image";

interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = () => {
	return (
		<section className="max-w-screen-lg mx-auto mt-20">
			<div className="mt-5">
				<h2 className="text-3xl font-title border-l-4 pl-2 border-l-primary">
					SERVICIOS
				</h2>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center  ">
				{/* CARDS */}
				<div className="w-11/12 md:w-1/3  mt-9 m-2">
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

				<div className="w-11/12 md:w-1/3   mt-9 m-2">
					<div className="relative">
						<Image
							src={"/images/industria2.jpg"}
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
				<div className="w-11/12 md:w-1/3  mt-9 m-2">
					<div className="relative">
						<Image
							src={"/images/industria3.jpg"}
							layout="responsive"
							width={1996}
							height={1331}
							className="overflow-hidden hover:scale-125 transition-transform duration-700 ease-in-out"
						/>
					</div>
					<div className="p-2 bg-bg_secondary">
						<h3 className=" font-title text-xl text-center">
							Montajes Industriales
						</h3>
						<p className="mt-4 text-justify">
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
