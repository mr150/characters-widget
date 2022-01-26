import React, {useCallback} from "react";
import Character from './components/character';
import List from '../../components/list';

function CharsList() {
  const tmpChars = [
    {id: 0, name: 'Ricko', img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    {id: 1, name: 'Mortini', img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
    {id: 2, name: 'Summero', img: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'},
  ];

  const renderChar = useCallback(item => (
		<Character item={item}/>
	), []);

  return (
    <List
      items={tmpChars}
      renderItem={renderChar}
      className="p-4 m-0 list-none grid grid-cols-2 gap-2"
    />
  );
}

export default React.memo(CharsList);
