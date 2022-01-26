import React from 'react';
import propTypes from 'prop-types';

function Character({item}) {
  return (
    // ссылка, потому что она доступнее из коробки чем div
    // и можно было бы доработать открытие информации о персонаже в новой вкладке
    <a href="#" className="block p-2 text-center no-underline text-stale-400">
      <img className="mb-4" src={item.img} alt="" width="100" height="100"/>
      <strong className="block">{item.name}</strong>
    </a>
  );
}

Character.propTypes = {
  item: propTypes.object.isRequired,
};

export default React.memo(Character);
