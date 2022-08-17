import Image from "next/image";
interface PresentationProps {}

const Presentation: React.FunctionComponent<PresentationProps> = () => {
	return (
		<section className="max-w-screen-lg mx-auto mt-20 ">
			<h3 className="text-3xl font-title border-l-4 pl-2 ml-4 md:ml-0 border-l-primary uppercase   ">
				Quienes Somos
			</h3>
			<div className="flex flex-col md:flex-row justify-evenly items-center  w-full mt-10 min-h-banner">
				<div className="md:rounded-l-md rounded-md md:w-5/12 w-full bg-bg_secondary p-10">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
						velit iusto, cum facere ea nostrum recusandae architecto optio minus
						perspiciatis quaerat aperiam blanditiis dolor tempore, corporis, at
						assumenda soluta?Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quam inventore, voluptatum blanditiis quasi molestias et
						pariatur ipsa facere? Perferendis praesentium magni laborum
						asperiores et tempore voluptate officiis repellat ab ex.
					</p>
				</div>

				<div className="relative md:w-5/12 w-full ">
					<Image
						className=" md:rounded-r-md rounded-md"
						layout="responsive"
						width={5999}
						height={3216}
						objectFit="cover"
						src={"/images/quienes_somos.jpg"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Presentation;
