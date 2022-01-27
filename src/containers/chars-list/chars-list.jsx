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
    <>
      {chars.error ?
			 <p className="m-0 p-20 text-center text-xl text-gray-600 bg-gray-100">{chars.error}</p> :
			 <List
				 items={chars.results}
				 renderItem={renderChar}
				 className="p-4 m-0 list-none grid grid-cols-2 gap-4"
			 />
			}
		</>
  );
}

export default React.memo(CharsList);
