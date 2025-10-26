import { useScrollToTop } from "../hooks/useScrollToTop";

function ScrollToTopButton() {
	const { showButton, scrollToTop } = useScrollToTop();

	if (!showButton) return null;

	return (
		<button className="scroll-to-top" onClick={scrollToTop}>
			<i className="fas fa-arrow-up"></i>
		</button>
	);
}

export default ScrollToTopButton;
