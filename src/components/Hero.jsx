import React from "react";
import { motion } from "framer-motion";

function Hero({ logoUrl }) {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3
			}
		}
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 15
			}
		}
	}

	const logoVariants = {
		hidden: { opacity: 0, scale: 0, rotate: -180 },
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 15,
				duration: 0.8
			}
		}
	}

	const titleVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 12
			}
		}
	}

	const codeLineVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: (i) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.2,
				type: "spring",
				stiffness: 100,
				damping: 15
			}
		})
	}

	return (
		<section id="home" className="hero">
			<div className="hero-container">
				<motion.div 
					className="hero-content"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div 
						className="hero-logo"
						variants={logoVariants}
					>
						<img
							src={logoUrl}
							alt="CodixVerse Icon"
							className="hero-logo-img"
						/>
					</motion.div>
					<motion.h1 
						className="hero-title"
						variants={titleVariants}
					>
						<span>CodixVerse</span>
					</motion.h1>
					<motion.p 
						className="hero-description"
						variants={itemVariants}
					>
						We are a team of professional developers specializing in application
						and website development with the latest technologies and best
						practices in the world of programming
					</motion.p>
					<motion.div 
						className="hero-buttons"
						variants={itemVariants}
					>
						<motion.a 
							href="#services" 
							className="btn btn-primary"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Discover Our Services
						</motion.a>
						<motion.a 
							href="#contact" 
							className="btn btn-secondary"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Contact Us
						</motion.a>
					</motion.div>
				</motion.div>
				<motion.div 
					className="hero-image"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.8 }}
				>
					<div className="code-animation">
						{[0, 1, 2, 3].map((i) => (
							<motion.div 
								key={i}
								className="code-line"
								variants={codeLineVariants}
								initial="hidden"
								animate="visible"
								custom={i}
							>
								{i === 0 && (
									<>
										<span className="code-keyword">const</span>
										<span className="code-variable"> CodixVerse</span>
										<span className="code-operator"> =</span>
										<span className="code-string"> "Excellence in Code"</span>
									</>
								)}
								{i === 1 && (
									<>
										<span className="code-keyword">function</span>
										<span className="code-function"> createAmazing()</span>
										<span className="code-bracket"> {"{"}</span>
									</>
								)}
								{i === 2 && (
									<>
										<span className="code-indent"></span>
										<span className="code-keyword">return</span>
										<span className="code-string"> "Innovation"</span>
										<span className="code-operator"> +</span>
										<span className="code-string"> " & Quality"</span>
										<span>;</span>
									</>
								)}
								{i === 3 && (
									<>
										<span className="code-bracket">{"}"}</span>
									</>
								)}
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Hero;
