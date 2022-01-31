import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

function Character({item, detailed}) {
	let imgSize = 76,
      wrapperCss = 'flex-col items-center';

  if(detailed) {
		imgSize = 250;
		wrapperCss = 'items-start';
	}

  return (
    <div className={cn('flex flex-wrap gap-5', wrapperCss)}>
			<img src={item.image} alt="" width={imgSize} height={imgSize}/>
			{detailed ? (
        <div className="sm:max-w-sm">
          <strong className="block text-lg">{item.name}</strong>
          <p>status: {item.status}</p>
          <p>species: {item.species}</p>
          <p>type: {item.type || 'None'}</p>
          <p>gender: {item.gender}</p>
					<p>origin: {item.origin?.name}</p>
					<p>location: {item.location?.name}</p>
				</div>
			) : <strong>{item.name}</strong>
			}
		</div>
	);
}

Character.propTypes = {
  item: propTypes.object.isRequired,
};

export default React.memo(Character);
