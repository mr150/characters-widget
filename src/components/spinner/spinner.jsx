import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

function Spinner({active, children, wrapperCssClass}) {

	return (
		<div className={cn(
			active ? "before:content-[''] after:content-['']" : '',
      'relative loader after:animate-spin',
      wrapperCssClass
		)}>
			{children}
		</div>
	);
}

Spinner.propTypes = {
  active: propTypes.bool,
};

export default React.memo(Spinner);
