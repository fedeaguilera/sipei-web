import Link from "next/link";
import { Whatsapp, Instagram, Mailgun } from "@icons-pack/react-simple-icons";
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
	let year = new Date().getFullYear();
	return (
		<section className="bg-bg_secondary mt-20 ">
			<div className="flex flex-col md:flex-row max-w-screen-lg justify-between px-10 md:px-20 pt-14 ">
				<div className="flex p-5 flex-col transition-all">
					<h3 className="text-3xl font-title border-l-4 border-l-primary pl-2">
						CONTACTO SIPEI{" "}
					</h3>
					<a className="mt-5 hover:underline hover:text-primary duration-500 ease-in-out font-bold cursor-pointer ">
						Contactenos
					</a>
				</div>
				{/* SOCIAL NETWORK */}
				<div className="flex p-5 flex-col">
					<h4 className="text-2xl font-title border-l-4 border-l-primary pl-2">
						Síguenos en:
					</h4>
					<div className="flex mt-5 justify-evenly">
						<Link href="https://www.google.com.ar">
							<Whatsapp className="hover:text-primary hover:scale-125 duration-500 ease-in-out" />
						</Link>
						<Link href="https://www.google.com.ar">
							<Instagram className="hover:text-primary hover:scale-125 duration-500 ease-in-out" />
						</Link>
						<Link href="https://www.google.com.ar">
							<Mailgun className="hover:text-primary hover:scale-125 duration-500 ease-in-out" />
						</Link>
					</div>
				</div>
			</div>
			{/* COPYRIGTH AGUIDEV */}
			<div className=" flex flex-col justify-between px-10 md:pt-14 pt-12 pb-2">
				<h4 className="text-center">SIPEI S.A ARGENTINA ©{year}</h4>
				<p className="text-center">Aguidev WebDeveloper</p>
			</div>
		</section>
	);
};

export default Footer;
