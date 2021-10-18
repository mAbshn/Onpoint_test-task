import React, { useEffect, useRef } from 'react';
import '../styles/Popup.scss';
import '../styles/Slide3.scss';
import Page from './Page';
import Pagination from './UI/Pagination/Pagination';

const Popup = ({ isPopupOpened, setIsPopupOpened, openPopup, offset }) => {
	const popup = useRef();
    const page1 = useRef();
    const page2 = useRef();

	if (isPopupOpened) {
		openPopup(popup);
	}

	const close = () => {
		popup.current.classList.remove('_active');
		setIsPopupOpened(false);
	};

	useEffect(() => {
		if (popup.current && offset !== 2048 && isPopupOpened) {
			close();
		}
	}, [offset]);

	const posts = [
		[
			{number: '01', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
			{number: '02', text: "Faucibus pulvinar elementum integer enim"},
			{number: '03', text: "Faucibus pulvinar elementum integer enim"},
		],
		[
			{number: '04', text: "Mi bibendum neque egestas congue quisque egestas diam"},
			{number: '05', text: "Venenatis lectus magna fringilla urna"},
			{number: '06', text: "Venenatis lectus magna fringilla urna"}
		]
	]

	return (
		<div className='slide3__popup-wrapper' ref={popup}>
			<div className='slide3__popup'>
				<h2 className='slide3__pros title'>Преимущества</h2>
				<h1 className='slide3__popupBrend brend'>
					Brend<span>xy</span>
				</h1>
				<Page id="page1" className='slide3__list _active' pageRef={page1} posts={posts[0]} />
				<Page id="page2" className='slide3__list' pageRef={page2} posts={posts[1]} />
                <Pagination style={{marginTop: 50}} page1={page1} page2={page2} />
				<div className='slide3__close' onClick={close}></div>
			</div>
		</div>
	);
};

export default Popup;
