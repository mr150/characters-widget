import React, {useCallback, useState} from "react";
import {useStoreon} from 'storeon/react';
import Character from './components/character';
import List from '../../components/list';
import Modal from '../../components/modal';
import Pagination from '../../components/pagination';

function CharsList() {
  const {chars, filter, dispatch} = useStoreon('chars', 'filter');
  // показалось проще хранить выбранного персонажа и показ модалки во внутреннем состоянии
  // в других компонентах они не нужны, а изменяются в одну строку
  const [modalHidden, toggleModal] = useState(true);
  const [currentChar, setCurChar] = useState({});

	const closeModal = useCallback(() => toggleModal(true), []);
	const goPage = useCallback((n) => (
		dispatch('filter/set', {...filter, page: n})
), [filter]);

	const renderChar = useCallback((item, i) => (
    // ссылка, потому что она доступнее из коробки чем div
    // и можно было бы доработать открытие информации о персонаже в новой вкладке
		<a
			href={"/character/" + item.id}
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
					 cssClass="py-4 px-0 m-0 grid grid-cols-2 gap-4 content-start list-none overflow-auto grow"
				 />
				 <Modal hidden={modalHidden} onClose={closeModal}>
			     <Character item={currentChar} detailed/>
				 </Modal>
         <div className="p-4 flex justify-between items-center gap-4 bg-gray-100">
					 <Pagination count={chars.info?.pages} current={filter.page} itemClick={goPage}/>
           <span>Count: {chars.info?.count}</span>
         </div>
			 </>
			}
		</>
  );
}

export default React.memo(CharsList);
