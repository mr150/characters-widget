import React, {useCallback, useState} from "react";
import {useStoreon} from 'storeon/react';
import Character from './components/character';
import List from '../../components/list';
import Modal from '../../components/modal';

function CharsList() {
  const {chars} = useStoreon('chars');
  // показалось проще хранить выбранного персонажа и показ модалки во внутреннем состоянии
  // в других компонентах они не нужны, а изменяются в одну строку
  const [modalHidden, toggleModal] = useState(true);
  const [currentChar, setCurChar] = useState({});

	const closeModal = useCallback(() => toggleModal(true), []);

	const renderChar = useCallback((item, i) => (
    // ссылка, потому что она доступнее из коробки чем div
    // и можно было бы доработать открытие информации о персонаже в новой вкладке
		<a
			href={"/character/" + i}
			onClick={(e) => {
        e.preventDefault();
        toggleModal(false);
        setCurChar(item);
      }}
			className="block p-2 text-center no-underline text-stale-400"
		>
			<Character item={item}/>
		</a>
	), []);

  return (
    <>
      {chars.error ?
			 <p className="m-0 p-20 text-center text-xl text-gray-600 bg-gray-100">{chars.error}</p> :
       <>
				 <List
					 items={chars.results}
					 renderItem={renderChar}
					 className="p-4 m-0 list-none grid grid-cols-2 gap-4"
				 />
				 <Modal hidden={modalHidden} onClose={closeModal}>
			     <Character item={currentChar} detailed/>
				 </Modal>
			 </>
			}
		</>
  );
}

export default React.memo(CharsList);
