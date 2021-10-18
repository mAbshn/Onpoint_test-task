import React, { useEffect, useRef, useState } from 'react';
import '../styles/Slide2.scss';
import Scrollbar from './UI/Scrollbar/Scrollbar';
import img1 from '../img/slider2_1.png';
import img2 from '../img/slider2_2.png';
import img3 from '../img/slider2_3.png';
import img4 from '../img/slider2_4.png';
import img5 from '../img/slider2_5.png';

const Slide2 = () => {
	const article = useRef();
	const img1ref = useRef();
	const img2ref = useRef();
	const img3ref = useRef();
	const img4ref = useRef();
	const img5ref = useRef();
	const [scrollFromTop, setScrollFromTop] = useState(0);

	const observer = new IntersectionObserver((entries) => {
        if(observer.current) observer.current.disconnect();
		for (let elem of entries) {
            console.log(elem);
			if (elem.intersectionRatio > 0) {
				elem.target.style.animation = 'slide2 3s 1';
                elem.target.style.opacity = '1';
			} else {
				elem.target.style.animation = 'none';
                elem.target.style.opacity = '0';
			}
		}
	});

    useEffect(() => {
        if (img1ref.current) {
            observer.observe(img1ref.current);
            observer.observe(img2ref.current);
            observer.observe(img3ref.current);
            observer.observe(img4ref.current);
            observer.observe(img5ref.current);
        }
    },[]);

	const scroll = () => {
		setScrollFromTop(article.current.scrollTop);
	};

	return (
		<div className='slide2'>
			<img className='slide2__img1' src={img1} alt='img' ref={img1ref} />
			<img className='slide2__img2' src={img2} alt='img' ref={img2ref} />
			<img className='slide2__img3' src={img3} alt='img' ref={img3ref} />
			<img className='slide2__img4' src={img4} alt='img' ref={img4ref} />
			<img className='slide2__img5' src={img5} alt='img' ref={img5ref} />
			<p className='slide2__title'>
				Текст
				<br />
				сообщения
			</p>
			<article className='slide2__container'>
				<Scrollbar
					scrollFromTop={scrollFromTop}
					setScrollFromTop={setScrollFromTop}
					articleRef={article}
				/>
				<div className='slide2__text-wrapper'>
					<div className='slide2__text' onScroll={scroll} ref={article}>
						<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut
						morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam
						eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi
						etiam dignissim diam quis enim lobortis. Est sit amet facilisis
						magna. Neque laoreet suspendisse interdum consectetur libero id. Nec
						ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
						porttitor leo a diam sollicitudin tempor id. Euismod quis viverra
						nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
						amet massa vitae tortor condimentum lacinia. Et malesuada fames ac
						turpis egestas integer eget. Elementum pulvinar etiam non quam lacus
						suspendisse faucibus interdum posuere. Amet justo donec enim diam
						vulputate ut pharetra sit. Risus ultricies tristique nulla aliquet
						enim tortor at auctor. Velit sed ullamcorper morbi tincidunt ornare
						massa. Quis hendrerit dolor magna eget est lorem ipsum. Etiam
						dignissim diam quis enim. Gravida neque convallis a cras. Ut enim
						blandit volutpat maecenas volutpat. Mauris sit amet massa vitae
						tortor condimentum lacinia quis vel. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Esse quo atque distinctio temporibus
						quisquam autem sit fugit, dolor perspiciatis minus voluptate
						consequuntur, quis reiciendis laborum delectus rerum, nemo saepe
						odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Beatae, dolor voluptatibus ratione quod aliquam officia repellendus
						cupiditate quam id doloremque eum aspernatur quibusdam ducimus, ex
						amet. At, ducimus culpa. Temporibus! Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Enim aliquid earum dolores, aperiam
						quibusdam vel voluptas odit cupiditate perferendis quae, minima
						dolorem quidem quia ea eligendi animi repellat sed voluptate.
					</div>
				</div>
			</article>
		</div>
	);
};

export default Slide2;
