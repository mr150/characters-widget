import React, {useEffect} from 'react';
import CharsList from './containers/chars-list';
import {useStoreon} from 'storeon/react';

function App() {
  const {dispatch} = useStoreon();

  useEffect(() => {
		dispatch('chars/load');
  }, []);

  return (
    <div className="border p-4">
			<CharsList/>
    </div>
  );
}

export default React.memo(App);
