import React, { useEffect, useRef } from 'react';
import Styles from "./elements.module.css";

const ScrollMovie = ({ styles, pictures, parentCurrent }) => {
	const { p_width, p_height, scale } = styles;
	const containerRef = useRef();
	const canvasRef = useRef();
	const updateCanvasSize = () => {
		const container = containerRef.current;
		const canvas = canvasRef.current;

		const windowAspectRatio = parentCurrent.offsetWidth / parentCurrent.offsetHeight;
		const pictureAspectRatio = p_width / p_height;

		let newWidth, newHeight;
		let overflow;

		if (windowAspectRatio > pictureAspectRatio) {
			// 종횡비 윈도우가 높다 -> canvas height overflow
			newWidth = parentCurrent.offsetWidth;
			newHeight = newWidth / pictureAspectRatio;
			overflow = `translateY(-${newHeight / 2}px)`;
		} else {
			newHeight = parentCurrent.offsetHeight;
			newWidth = newHeight * pictureAspectRatio;
			overflow = `translateX(-${newWidth / 2}px)`;
		}

		canvas.style.width = `${newWidth}px`;
		canvas.style.height = `${newHeight}px`;
		canvas.style.display = 'fixed';
		canvas.style.top = '0px';
		canvas.style.left = '0px';
		canvas.style.transform = overflow;

		container.style.height = `${parentCurrent * scale}px`;
	};

	const updateScroll = () => {};

	useEffect(() => {
		updateCanvasSize();
		window.addEventListener('resize', updateCanvasSize);
		window.addEventListener('scroll', updateScroll);
		return () => {
			window.removeEventListener('resize', updateCanvasSize);
			window.removeEventListener('scroll', updateScroll);
		};
	}, [p_width, p_height, scale]);

	return (
		<div ref={containerRef} className={Styles.scroll__movie}>
			<canvas
				ref={canvasRef}
				className='pcanvas'
				width={p_width}
				height={p_height}
			></canvas>
		</div>
	);
};

export default ScrollMovie;
