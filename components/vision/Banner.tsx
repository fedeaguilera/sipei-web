import Image from "next/image";
interface BannerProps {}

const Banner: React.FunctionComponent<BannerProps> = () => {
	return (
		<section className="border-t-4 border-t-gray-300 border-b-4 border-b-gray-300">
			<div className="flex flex-col">
				<div className="pt-2 relative w-full md:h-[45vh] h-[20vh] flex">
					<Image
						src={"/images/banner_vision.jpg"}
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="absolute w-full text-center md:text-6xl text-5xl md:top-1/3 top-32">
					<h2 className="font-title text-bg_secondary">Nuestra Vision</h2>
				</div>
			</div>
		</section>
	);
};

export default Banner;
