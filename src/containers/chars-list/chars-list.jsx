import React, {useCallback, useState} from 'react';
import {useStoreon} from 'storeon/react';
import Character from './components/character';
import List from '../../components/list';
import Modal from '../../components/modal';
import Spinner from '../../components/spinner';
// думал сделать его контейнером и вынести туда работу с filter из стора, но по смыслу
// он больше показался глупым компонентом
import CharsPaginator from './components/chars-paginator';

function CharsList() {
  const {chars, filter, dispatch, isWaiting, error} =
        useStoreon('chars', 'filter', 'isWaiting', 'error');
  // показалось проще хранить выбранного персонажа и показ модалки во внутреннем состоянии
  // в других компонентах они не нужны, а изменяются в одну строку
  const [modalHidden, toggleModal] = useState(true);
  const [currentChar, setCurChar] = useState({});

	const cb = {
		closeModal: useCallback(() => toggleModal(true), []),
		goPage: useCallback((n) => (
			dispatch('filter/set', {...filter, page: n})
		), [filter, dispatch]),
  };

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
			className="block p-2 sm:p-3 w-full text-center no-underline text-gray-900"
		>
			<Character item={item}/>
		</a>
	), []);

  return (
		<Spinner wrapperCssClass="h-full flex flex-col" active={isWaiting}>
			{error ?
			 <p className="m-0 p-20 text-center text-xl text-gray-600 bg-gray-100">{error}</p> :
			 <>
				 <List
					 items={chars.results}
					 renderItem={renderChar}
					 cssClass="px-5 m-0 grid grid-cols-2 gap-3 content-start list-none overflow-auto grow"
					 itemCssClass="flex border border-gray-300 transition-colors hover:border-gray-900"
				 />
				 <Modal hidden={modalHidden} onClose={cb.closeModal}>
					 <Character item={currentChar} detailed/>
				 </Modal>
				 <CharsPaginator
					 charsCount={chars.info?.count} count={chars.info?.pages}
					 current={filter.page} itemClick={cb.goPage}
				 />
			 </>
			}
		</Spinner>
  );
}

export default React.memo(CharsList);
