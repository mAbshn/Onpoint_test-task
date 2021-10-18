import React, { useState } from 'react';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import plus from '../img/plus.png';
import img1 from '../img/slider3_1.png';
import img2 from '../img/slider3_2.png';
import img3 from '../img/slider3_3.png';
import img4 from '../img/slider3_4.png';
import img5 from '../img/slider3_5.png';
import img6 from '../img/slider3_6.png';
import img7 from '../img/slider3_7.png';
import img8 from '../img/slider3_8.png';
import img9 from '../img/slider3_9.png';
import '../styles/Slide3.scss';
import Popup from './Popup';
import Button from './UI/Button/Button';

const Slide3 = ({offset}) => {

    const [isPopupOpened, setIsPopupOpened] = useState(false);

	const openPopup = (popup) => {
		if (popup.current) {
			popup.current.classList.add('_active');
		}
	};

	return (
		<div className='slide3'>
			<h2 className='slide3__keyMessage title'>Ключевое сообщение</h2>
			<h1 className='slide3__brend brend'>
				Brend<span>xy</span>
			</h1>
			<div className='slide3__posts-wrapper'>
				<div className='slide3__firstPost'>
					<div className='slide3__firstPost-text'>
						Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
						lorem sed risus ultricies
					</div>
					<img className='slide3__firstPost-img' src={icon1} alt='icon' />
				</div>
				<div className='slide3__secondPost-btn-wrapper'>
					<div className='slide3__secondPost'>
						<div className='slide3__secondPost-text'>A arcu cursus vitae</div>
						<img className='slide3__secondPost-img' src={icon2} alt='icon' />
					</div>
					<Button
						func={() => setIsPopupOpened(true)}
						image={plus}
						text='Подробнее'
						styles={[{ width: 263 }, { width: 13 }]}
					/>
				</div>
			</div>
			<Popup isPopupOpened={isPopupOpened} setIsPopupOpened={setIsPopupOpened} openPopup={openPopup} offset={offset} />
			<img className='slide3__img1' src={img1} alt='img' />
			<img className='slide3__img2' src={img2} alt='img' />
			<img className='slide3__img3' src={img3} alt='img' />
			<img className='slide3__img4' src={img4} alt='img' />
			<img className='slide3__img5' src={img5} alt='img' />
			<img className='slide3__img6' src={img6} alt='img' />
			<img className='slide3__img7' src={img7} alt='img' />
			<img className='slide3__img8' src={img8} alt='img' />
			<img className='slide3__img9' src={img9} alt='img' />
		</div>
	);
};

export default Slide3;
