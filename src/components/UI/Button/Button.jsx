import React from 'react';
import cl from './Button.module.scss'

const Button = (props) => {
	return (
		<div className={cl.btnWrapper} style={props.styles[0]}>
			<button className={cl.btn} onClick={props.func}>
				<img src={props.image} alt='arrow' style={props.styles[1]} />
			</button>
			<span>{props.text}</span>
		</div>
	);
};

export default Button;
