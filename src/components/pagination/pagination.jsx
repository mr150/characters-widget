import React, {useCallback} from 'react';
import propTypes from 'prop-types';
import List from '../list';

function Pagination({count, current, itemClick}) {
  const pagList = [];

  if(count > 1) {
		const start = Math.max(1, current - 2),
					end = Math.min(count, current + 2);

		if(current > 3) {
			pagList.push(1);
			if(current > 4) pagList.push(0);
		}

		for(let i = start; i <= end; i++) pagList.push(i);

		if(current < count - 2) {
			if(current < count - 3) pagList.push(0);
			pagList.push(count);
    }
  }

  const renderItem = useCallback(item => (
		item ? <button
             className={item === current ? 'bg-blue-400' : 'cursor-pointer'}
             onClick={(item !== current) ? (() => itemClick(item)) : null}
           >{item}</button> : '...'
	), [current, itemClick]);

	return (
		<List
			items={pagList}
			renderItem={renderItem}
			cssClass="p-0 m-0 flex gap-2 list-none"
		/>
	);
}

Pagination.propTypes = {
  count: propTypes.number,
  current: propTypes.number,
  itemClick: propTypes.func.isRequired,
};

Pagination.defaultProps = {
  count: 1,
};

export default React.memo(Pagination);
