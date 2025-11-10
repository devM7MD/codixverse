import { motion, AnimatePresence } from "framer-motion";
import { useScrollToTop } from "../hooks/useScrollToTop";

function ScrollToTopButton() {
	const { showButton, scrollToTop } = useScrollToTop();

	return (
		<AnimatePresence>
			{showButton && (
				<motion.button 
					className="scroll-to-top" 
					onClick={scrollToTop}
					initial={{ opacity: 0, scale: 0, rotate: -180 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					exit={{ opacity: 0, scale: 0, rotate: 180 }}
					whileHover={{ scale: 1.1, y: -5 }}
					whileTap={{ scale: 0.9 }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 15
					}}
				>
					<motion.i 
						className="fas fa-arrow-up"
						animate={{ y: [0, -5, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					/>
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export default ScrollToTopButton;
