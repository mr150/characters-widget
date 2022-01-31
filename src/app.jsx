import React, {useEffect} from 'react';
import CharsList from './containers/chars-list';
import CharsFilter from './containers/chars-filter';
import {useStoreon} from 'storeon/react';

function App() {
  const {dispatch} = useStoreon();

  useEffect(() => {
		dispatch('chars/load');
  }, []);

  return (
    <article className="border pt-5 text-base">
			<h2 className="m-0 px-5 text-center">Browse characters</h2>
			<section className="mb-7 pt-5 px-5">
				<h3 className="sr-only">Filter</h3>
				<CharsFilter/>
      </section>
			<section className="h-[33rem]">
				<h3 className="sr-only">List of characters</h3>
				<CharsList/>
      </section>
		</article>
  );
}

export default React.memo(App);
