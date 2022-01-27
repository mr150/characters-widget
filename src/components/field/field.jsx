import React, {useCallback, useEffect, useState} from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

function Field({label, hiddenLabel, children, cssClass}) {
  return (
		<label className={classNames('block', cssClass)}>
			<span className={hiddenLabel ? 'sr-only' : 'block mb-1'}>{label}</span>
			{children}
		</label>
	);
}

Field.propTypes = {
  label: propTypes.string,
  hiddenLabel: propTypes.bool,
};

Field.defaultProps = {
  label: '',
};

export default React.memo(Field);
