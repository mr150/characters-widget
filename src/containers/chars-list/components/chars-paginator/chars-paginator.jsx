import React from 'react';
import Pagination from '../../../../components/pagination';

function CharsPaginator(props) {
  return (
		<div className="p-4 flex justify-between items-center gap-4 bg-gray-100">
			<Pagination {...props}/>
			<span>Count: {props.charsCount}</span>
		</div>
	);
}

export default React.memo(CharsPaginator);
