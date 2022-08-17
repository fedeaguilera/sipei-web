interface ObjetivosProps {}

const Objetivos: React.FunctionComponent<ObjetivosProps> = () => {
	return (
		<section className="p-5">
			<div className="max-w-screen-lg mx-auto my-10">
				<h3 className="text-3xl font-title border-l-4 pl-2 ml-4 md:ml-0 border-l-primary uppercase">
					Objetivos
				</h3>
				<p className="mt-5 p-2">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
					nisi labore odio iste suscipit dignissimos numquam ea, beatae, dolores
					perferendis in fugiat quaerat quibusdam explicabo repellat eaque,
					tempora laborum quas!
				</p>
				<div>
					<ul>
						<li>
							-Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
							voluptatum provident nobis odio debitis eius libero dolorem
							quibusdam porro eaque facere reprehenderit magni, sed, eligendi
							harum, architecto modi vitae nam.
						</li>
						<li>
							-Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
							quos necessitatibus quod similique iure! Facilis delectus esse
							quaerat aspernatur nostrum doloremque tenetur unde, expedita ipsa,
							fugiat a est possimus dolores.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Objetivos;
