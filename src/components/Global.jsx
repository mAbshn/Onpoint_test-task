import React from 'react';
import home from '../img/home.svg';
import logo from '../img/logo.svg';

import '../styles/Slider.scss';

const Global = ({ setOffset, sliderRef }) => {

	const back = () => {
		sliderRef.current.style.transform = 'translateX(0px)'
		setOffset(0);
	};

	return (
		<React.Fragment>
			<div className='slider__home'>
				<img
					className='slider__home-img'
					src={home}
					alt='home'
					onClick={back}
				/>
				<span className='slider__home-text'>Project</span>
			</div>
			<img className='slider__logo' src={logo} alt='home' />
		</React.Fragment>
	);
};

export default Global;
