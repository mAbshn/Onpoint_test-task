import React from 'react';
import arrow from '../img/arrow_right.png';
import img1 from '../img/slider1_1.png';
import img2 from '../img/slider1_2.png';
import img3 from '../img/slider1_3.png';
import img4 from '../img/slider1_4.png';
import img5 from '../img/slider1_5.png';
import img6 from '../img/slider1_6.png';
import img7 from '../img/slider1_7.png';
import img8 from '../img/slider1_8.png';
import img9 from '../img/slider1_9.png';
import '../styles/Slide1.scss';
import Button from './UI/Button/Button';

const Slide1 = ({ setOffset, sliderRef }) => {
	const forward = () => {
		sliderRef.current.style.transform = 'translateX(-1024px)';
		setOffset(1024);
	};

	return (
		<div className='slide1'>
			<p className='slide1__hello'>привет,</p>
			<br />
			<p className='slide1__text'>
				это <span>не</span> коммерческое задание
			</p>
			<Button
				func={forward}
				image={arrow}
				text='Что дальше?'
				styles={[{ position: 'absolute', top: 465, left: 627 }, {width: 20}]}
			/>
			<img className='slide1__img1' src={img1} alt='img' />
			<img className='slide1__img2' src={img2} alt='img' />
			<img className='slide1__img3' src={img3} alt='img' />
			<img className='slide1__img4' src={img4} alt='img' />
			<img className='slide1__img5' src={img5} alt='img' />
			<img className='slide1__img6' src={img6} alt='img' />
			<img className='slide1__img7' src={img7} alt='img' />
			<img className='slide1__img8' src={img8} alt='img' />
			<img className='slide1__img9' src={img9} alt='img' />
		</div>
	);
};

export default Slide1;
