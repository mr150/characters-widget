import React from 'react';
import propTypes from 'prop-types';

function List({items, renderItem, className, itemCssClass}) {
  return (
		<ul className={className}>
			{items.map((item, i) => (
				<li key={item.id} className={itemCssClass}>
          {renderItem(item, i)}
				</li>
			))}
		</ul>
  );
}

List.propTypes = {
  items: propTypes.array.isRequired,
  renderItem: propTypes.func
};

List.defaultProps = {
  renderItem: (item) => item.toString(),
};

export default React.memo(List);
