import React from "react";

function Hero({ logoUrl }) {
	return (
		<section id="home" className="hero">
			<div className="hero-container">
				<div className="hero-content">
					<div className="hero-logo">
						<img
							src={logoUrl}
							alt="CodixVerse Icon"
							className="hero-logo-img"
						/>
					</div>
					<h1 className="hero-title">
						<span>CodixVerse</span>
					</h1>
					<p className="hero-description">
						We are a team of professional developers specializing in application
						and website development with the latest technologies and best
						practices in the world of programming
					</p>
					<div className="hero-buttons">
						<a href="#services" className="btn btn-primary">
							Discover Our Services
						</a>
						<a href="#contact" className="btn btn-secondary">
							Contact Us
						</a>
					</div>
				</div>
				<div className="hero-image">
					<div className="code-animation">
						<div className="code-line">
							<span className="code-keyword">const</span>
							<span className="code-variable"> CodixVerse</span>
							<span className="code-operator"> =</span>
							<span className="code-string"> "Excellence in Code"</span>
						</div>
						<div className="code-line">
							<span className="code-keyword">function</span>
							<span className="code-function"> createAmazing()</span>
							<span className="code-bracket"> {"{"}</span>
						</div>
						<div className="code-line">
							<span className="code-indent"></span>
							<span className="code-keyword">return</span>
							<span className="code-string"> "Innovation"</span>
							<span className="code-operator"> +</span>
							<span className="code-string"> " & Quality"</span>
							<span>;</span>
						</div>
						<div className="code-line">
							<span className="code-bracket">{"}"}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
