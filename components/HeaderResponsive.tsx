import Link from "next/link";
import { Instagram, Mailgun, Whatsapp } from "@icons-pack/react-simple-icons";

interface HeaderResponsiveProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderResponsive: React.FunctionComponent<HeaderResponsiveProps> = ({
	setOpen,
}) => {
	return (
		<aside className="min-h-screen min-w-screen top-0  bg-white z-50">
			<div className="flex flex-col justify-between items-center">
				<div onClick={() => setOpen(false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="25"
						height="25"
						viewBox="0 0 50 50"
						style={{ fill: "#000000" }}
					>
						<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
					</svg>
				</div>
				<div
					className="flex mt-10 w-full justify-around transition-all"
					onClick={() => setOpen(false)}
				>
					<Link href="https://www.google.com.ar">
						<Whatsapp className="hover:text-primary hover:scale-125 duration-500 ease-in-out " />
					</Link>
					<Link href="https://www.google.com.ar">
						<Instagram className="hover:text-primary hover:scale-125 duration-500 ease-in-out" />
					</Link>
					<Link href="https://www.google.com.ar">
						<Mailgun className="hover:text-primary hover:scale-125 duration-500 ease-in-out" />
					</Link>
				</div>
				<div
					className="list-none w-7/12 p-4 text-xl  py-10 flex-col justify-center text-center  flex  transition-all"
					onClick={() => setOpen(false)}
				>
					<li className="p-5 block border-b-4 border-b-transparent duration-500 ease-in-out hover:border-b-primary">
						<Link href="/">Home</Link>
					</li>
					<li className="p-5 block border-b-4 border-b-transparent duration-500 ease-in-out hover:border-b-primary">
						<Link href="/proyectos">Proyectos</Link>
					</li>
					<li className="p-5 block border-b-4 border-b-transparent duration-500 ease-in-out hover:border-b-primary">
						<Link href="/vision">Nuestra Vision</Link>
					</li>

					<li className="p-5 block border-b-4 border-b-transparent duration-500 ease-in-out hover:border-b-primary">
						<Link href="/contacto">Contacto</Link>
					</li>
				</div>
			</div>
		</aside>
	);
};

export default HeaderResponsive;
