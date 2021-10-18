import React, { useRef } from 'react';
import left from '../../../img/pag_left.png';
import right from '../../../img/pag_right.png';
import './Pagination.scss';

const Pagination = ({style, page1, page2}) => {

    const dot1= useRef();
    const dot2 = useRef();

    const changePages = (numberOfDot) => {
        if (numberOfDot === 1 && dot1.current && page1.current) {
            page1.current.classList.add('_active');
            page2.current.classList.remove('_active');
            dot1.current.classList.add('_active');
            dot2.current.classList.remove('_active');
        }
        if (numberOfDot === 2 && dot2.current && page2.current) {
            page2.current.classList.add('_active');
            page1.current.classList.remove('_active');
            dot2.current.classList.add('_active');
            dot1.current.classList.remove('_active');
        }
    }

    return (
        <div className='pagination' style={style}>
			<img className='pagination__left' src={left} alt='left' onClick={() => changePages(1)}/>
            <div className='pagination__dots'>
                <div className='pagination__dot _active' ref={dot1} onClick={() => changePages(1)}></div>
                <div className='pagination__dot' ref={dot2} onClick={() => changePages(2)}></div>
            </div>
            <img className='pagination__right' src={right} alt='right' onClick={() => changePages(2)}/>
        </div>
    );
};

export default Pagination;