import React from 'react';
import Pagination from '../../../../components/pagination';

function CharsPaginator(props) {
  return (
		<div className="px-5 py-4 flex flex-wrap justify-between border border-gray-100 items-center gap-4 bg-gray-100">
			<Pagination {...props}/>
			<span>Count: {props.charsCount}</span>
		</div>
	);
}

export default React.memo(CharsPaginator);
