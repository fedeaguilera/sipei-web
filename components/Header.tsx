interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
	return (
		<header className="max-w-screen-md mx-auto flex  pt-8 pb-2 flex-col">
			<div className="flex justify-between items-center">
				<h1 className="text-4xl text-primary font-title">SIPEI</h1>
				<div>Redes</div>
			</div>
			<div className="list-none w-7/12  flex-row justify-evenly py-3 hidden md:flex ">
				<li>Home</li>
				<li>Proyectos</li>
				<li>Nuestra Vision</li>
				<li>Contacto</li>
			</div>
		</header>
	);
};

export default Header;
