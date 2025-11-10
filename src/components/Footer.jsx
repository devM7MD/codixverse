import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function Footer({ logoUrl }) {
	const [sectionRef, isIntersecting] = useIntersectionObserver()

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
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

	const quickLinks = [
		{ href: '#about', label: 'About Us' },
		{ href: '#services', label: 'Services' },
		{ href: '#contact', label: 'Contact Us' },
		{ href: '#', label: 'Privacy Policy' }
	]

	return (
		<footer className="footer" ref={sectionRef}>
			<div className="container">
				<motion.div 
					className="footer-content"
					variants={containerVariants}
					initial="hidden"
					animate={isIntersecting ? "visible" : "hidden"}
				>
					<motion.div 
						className="footer-section"
						variants={itemVariants}
					>
						<motion.div 
							className="footer-logo"
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.95 }}
						>
							<img
								src={logoUrl}
								alt="CodixVerse Logo"
								className="footer-logo-img"
							/>
						</motion.div>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2 }}
						>
							A professional programming team specialized in developing
							innovative technical solutions
						</motion.p>
						<motion.div 
							className="social-links"
							initial={{ opacity: 0, y: 20 }}
							animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.3 }}
						>
							<motion.a 
								href="https://github.com/Codixverse"
								whileHover={{ scale: 1.2, rotate: 360 }}
								whileTap={{ scale: 0.9 }}
								transition={{ duration: 0.3 }}
							>
								<i className="fab fa-github"></i>
							</motion.a>
						</motion.div>
					</motion.div>
					<motion.div 
						className="footer-section"
						variants={itemVariants}
					>
						<motion.h4
							initial={{ opacity: 0, y: 20 }}
							animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2 }}
						>
							Quick Links
						</motion.h4>
						<motion.ul
							variants={containerVariants}
						>
							{quickLinks.map((link, index) => (
								<motion.li
									key={link.href}
									variants={itemVariants}
									custom={index}
								>
									<motion.a 
										href={link.href}
										whileHover={{ scale: 1.1, x: 5 }}
										whileTap={{ scale: 0.95 }}
									>
										{link.label}
									</motion.a>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				</motion.div>
				<motion.div 
					className="footer-bottom"
					initial={{ opacity: 0, y: 20 }}
					animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.5 }}
				>
					<p>&copy; 2025 CodixVerse. All Rights Reserved.</p>
				</motion.div>
			</div>
		</footer>
	);
}

export default Footer;
