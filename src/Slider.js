import { useRef, useState } from 'react';
import Global from './components/Global';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import './styles/Slider.scss';

function Slider() {
	const slider = useRef();
	const [offset, setOffset] = useState(null);

	let x1 = null,
		x2 = null;

	const touchStart = (e) => {
		x1 = e.touches[0].clientX;
	};

	const touchEnd = (e) => {
		x2 = e.changedTouches[0].clientX;
		let diff = x1 - x2;
		if (diff > 100 && offset !== 2048) {
			slider.current.style.transform = `translateX(${-offset - 1024}px)`;
			setOffset(offset + 1024);
		}
		if (diff < -100 && offset) {
			slider.current.style.transform = `translateX(${-offset + 1024}px)`;
			setOffset(offset - 1024);
		}
	};

	return (
		<div
			className='container'
			onTouchStart={(e) => touchStart(e)}
			onTouchEnd={(e) => touchEnd(e)}>
			<div className='slider' ref={slider}>
				<Slide1 setOffset={setOffset} sliderRef={slider} />
				<Slide2 />
				<Slide3 offset={offset} />
			</div>
			<Global setOffset={setOffset} sliderRef={slider} />
		</div>
	);
}

export default Slider;
