import React, {useCallback} from "react";
import {useStoreon} from 'storeon/react';
import debounce from 'debounce';
import Field from '../../components/field';
import Select from '../../components/select';
import css from '../../constants/css';
import {genders, statuses} from '../../constants/filters';

function CharsFilter() {
  const {dispatch} = useStoreon();

	const onChange = useCallback(
		debounce((e) => {
      dispatch('chars/load', new FormData(e.target.form));
    }, 300), []
  );

  return (
    // если бы форма была более сложной, то можно было бы сделать ее полностью управляемой
    // с контролем состояния. Но эта простая, поэтому решил получать из нее данные нативным способом.
    // Такое решение кажется простым и кратким
    <form action="https://rickandmortyapi.com/api/character" onChange={onChange}>
      <Field label="name" cssClass="mb-4 mx-auto max-w-xs" hiddenLabel>
        <input className={css.input} type="text" name="name" placeholder="Name"/>
      </Field>

			<div className="grid sm:grid-cols-2 gap-4">
				<Field label="species" hiddenLabel>
					<input className={css.input} type="text" name="species" placeholder="Species"/>
				</Field>

				<Field label="type" hiddenLabel>
					<input className={css.input} type="text" name="type" placeholder="Type"/>
				</Field>

				<Field label="status" hiddenLabel>
					<Select name="status" options={statuses}/>
				</Field>

				<Field label="gender" hiddenLabel>
					<Select name="gender" options={genders}/>
				</Field>
			</div>
    </form>
  );
}

export default React.memo(CharsFilter);
