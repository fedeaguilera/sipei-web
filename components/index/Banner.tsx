import Image from "next/image";

interface BannerProps {}

const Banner: React.FunctionComponent<BannerProps> = () => {
	return (
		<section className="border-t-4 border-t-gray-300 border-b-4 border-b-gray-300">
			<div className="flex flex-col">
				<div className="pt-2 relative w-full h-[75vh] flex">
					<Image
						src={"/images/soldador.jpg"}
						layout="fill"
						objectFit="cover"
						priority={true}
					></Image>
				</div>
				<div className="md:rounded-lg md:absolute md:w-2/5 mx-auto p-8 md:mt-10 md:ml-6 bg-bg_secondary min-h-[20vh]">
					<h2 className="text-3xl font-title border-l-4 border-primary pl-2">
						Montajes Industriales
					</h2>
					<p className="p-2 block text-center md:text-justify">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
						veritatis exercitationem soluta iure repellendus repellat nesciunt
						enim dignissimos culpa, odio in similique necessitatibus ut
						deserunt, assumenda tenetur voluptatem sequi itaque
					</p>
					<a className="text-xl text-secondary flex w-5/12 p-4 mt-8 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800">
						Conoce mas
					</a>
				</div>
			</div>
		</section>
	);
};

export default Banner;
