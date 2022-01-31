import React from 'react';
import propTypes from 'prop-types';

function List({items, renderItem, cssClass, itemCssClass}) {
  return (
		<ul className={cssClass}>
			{items.map((item, i) => (
				<li key={item.id || i} className={itemCssClass}>
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
