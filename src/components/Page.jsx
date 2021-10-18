import React from 'react';
import ListItem from './ListItem';

const Page = ({id, className, pageRef, posts}) => {
	return (
		<div id={id} className={className} ref={pageRef}>
			{posts.map((post) => 
                <ListItem key={post.number} number={post.number} text={post.text} />
            )}
		</div>
	);
};

export default Page;
