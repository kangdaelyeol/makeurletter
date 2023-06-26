import React, { useEffect, useRef, useState } from 'react';
import ScrollMovie from '../elements/ScrollMovie';

/** Element Schema
 * ScrollMovie : {
 *    type: "scrollMovie",
 *    scale: number
 *    pictures: String[] // imgUrl for canvas draw
 * }
 */

// props from main (temporary)

const Demo = () => {
	const tempProp = [
		{
			type: 'scrollMovie',
			styles: {
				scale: 5,
				p_width: 300,
				p_height: 200,
			},
			pictures: [],
		},
	];
	const demoRef = useRef();
	const [loading, setLoading] = useState(true);
	const [loadedImg, setLoadedimg] = useState([]); // 각 scene에 필요한 img들 (index는 scene 넘버)

	useEffect(() => {
		// Loading Logics ...
		let sceneLength = 0;
		let loadedCount = 0;
		let tempLoadedImg = [];

		const countLoadedImg = () => {
			loadedCount++;
			if (sceneLength === loadedCount) {
				setLoadedimg([tempLoadedImg]);
				setLoading(false);
			}
		};

		// calculate total length of contents(picture);
		for (let i = 0; i < tempProp.length; i++) {
			sceneLength += tempProp[i].pictures.length;
		}

		// load Img
		for (let i = 0; i < tempProp.length; i++) {
			tempLoadedImg[i] = [];
			for (let j = 0; j < tempProp[i].pictures.length; j++) {
				const img = new Image();
				img.src = tempProp[i].pictures[j];
				tempLoadedImg[i][j] = img;
				img.addEventListener('load', countLoadedImg);
			}
		}
	}, [tempProp]);
	return (
		<div
			className='container'
			style={{
				position: 'relative',
			}}
		>
			{loading
				? 'loading'
				: {
						/* ScrollMovieTest*/
				  }(
						<ScrollMovie
							parentCurrent={demoRef}
							styles={tempProp[0].styles}
							pictures={loadedImg[0]}
						/>
				  )}
		</div>
	);
};

export default Demo;
