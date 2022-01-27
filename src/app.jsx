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
    <article className="border p-4">
			<h2 className="sr-only">Characters widget</h2>
			<section className="mb-8">
				<h3 className="mt-0 text-center">Filter characters</h3>
				<CharsFilter/>
      </section>
			<section>
				<h3 className="sr-only">List of characters</h3>
				<CharsList/>
      </section>
    </article>
  );
}

export default React.memo(App);
