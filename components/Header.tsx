import Link from "next/link";
import { useState } from "react";

import { Instagram, Mailgun, Whatsapp } from "@icons-pack/react-simple-icons";
import HeaderResponsive from "./HeaderResponsive";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
	const [open, setOpen] = useState(false);
	return (
		<header className=" sticky z-40 top-0 bg-white border-b-2 border-b-gray-400   pt-8 pb-2 ">
			<div className="max-w-screen-md mx-auto flex flex-col">
				<div className="flex px-8 justify-between items-center">
					<h1 className="text-4xl text-primary font-title w-9/12">SIPEI</h1>
					<div className="hidden md:flex w-3/12 justify-evenly transition-all">
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
					{open ? null : (
						<div className="md:hidden flex">
							<button
								type="button"
								onClick={() => {
									setOpen(!open);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="25"
									height="25"
									viewBox="0 0 50 50"
									style={{ fill: "#000000" }}
								>
									<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
								</svg>
							</button>
						</div>
					)}
				</div>

				<div className="list-none w-7/12 p-4   flex-row justify-evenly py-3 hidden md:flex  transition-all">
					<li className="p-2 block border-b-4 border-b-transparent duration-500 ease-in-out hover:border-b-primary">
						<Link href="/">Home</Link>
					</li>
					<li className="p-2 block border-b-4 border-b-transparent duration-500 ease-in-out hover:border-b-primary">
						<Link href="/proyectos">Proyectos</Link>
					</li>
					<li className="p-2 block border-b-4 border-b-transparent duration-500 ease-in-out hover:border-b-primary">
						<Link href="/vision">Nuestra Vision</Link>
					</li>

					<li className="p-2 block border-b-4 border-b-transparent duration-500 ease-in-out hover:border-b-primary">
						<Link href="/contacto">Contacto</Link>
					</li>
				</div>
			</div>
			{open ? <HeaderResponsive open setOpen={setOpen} /> : null}
		</header>
	);
};

export default Header;
