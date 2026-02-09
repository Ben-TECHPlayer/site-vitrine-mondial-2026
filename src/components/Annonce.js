function Annonce() {
	return (
		<section>
			<h1>Coupe du monde 2026</h1>
			<h2 className="info">Pour la toute première fois, la coupe du monde aura lieu dans 3 pays différents :       
				<div className="image-item">
					<img src={`${process.env.PUBLIC_URL}/assets/etats-unis.png`} alt="usa" />
					<img src={`${process.env.PUBLIC_URL}/assets/canada.png`} alt="canada" />
					<img src={`${process.env.PUBLIC_URL}/assets/mexique.png`} alt="mexique" />
				</div>
			</h2>
			<p>Elle aura lieu entre le 11 juin et le 19 juillet 2026</p>
		</section>
	);
}

export default Annonce;