import React, { useRef, useState } from 'react';
import cl from './Scrollbar.module.scss'

const Scrollbar = ({scrollFromTop, setScrollFromTop, articleRef}) => {

    const thumb = useRef();

    const [y1, setY1] = useState(null);

    let y2 = null;

    const grabbing = (e) => {
        setY1(e.touches[0].clientY);
    }

    const release = (e) => {
        y2 = e.touches[0].clientY;
        let diff = y2 - y1;
        setY1(y2);
        setScrollFromTop(scrollFromTop + diff * (articleRef.current.scrollHeight / 330));
        articleRef.current.scrollTop = scrollFromTop;
    }

    const isOutside = () => {
        if (scrollFromTop * 330 / (articleRef.current.scrollHeight - 445) < 0) return true;
        if (scrollFromTop * 330 / (articleRef.current.scrollHeight - 445) > 330) return true;
        return false;
    }

    return (
        <div className={cl.scrollbar}>
            <div className={cl.scrollbar__thumb}
            ref={thumb}
            onTouchStart={(e) => grabbing(e)}
            onTouchMove={(e) => release(e)}
            style={(articleRef.current && !isOutside()) ? {top: scrollFromTop * 330 / (articleRef.current.scrollHeight - 445)} : scrollFromTop > 0 ? {top: 330} : {top: 0}}></div>
        </div>
    );
};

export default Scrollbar;