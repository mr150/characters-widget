import React from 'react';
import propTypes from 'prop-types';

function List({items, renderItem, className}) {
  return (
		<ul className={className}>
			{items.map(item => (
				<li key={item.id} className="">
          {renderItem(item)}
				</li>
			))}
		</ul>
  );
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  renderItem: propTypes.func
};

List.defaultProps = {
  renderItem: (item) => item.toString(),
};

export default React.memo(List);
