import React, {useCallback} from "react";
import {useStoreon} from 'storeon/react';
import Character from './components/character';
import List from '../../components/list';

function CharsList() {
  const {chars} = useStoreon('chars');

  const renderChar = useCallback(item => (
		<Character item={item}/>
	), []);

  return (
    <List
      items={chars.results}
      renderItem={renderChar}
      className="p-4 m-0 list-none grid grid-cols-2 gap-2"
    />
  );
}

export default React.memo(CharsList);
