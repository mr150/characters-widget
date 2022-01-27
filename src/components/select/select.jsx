import React from 'react';
import propTypes from "prop-types";
import css from '../../constants/css';

function Select(props){
  return (
    <select className={css.input} name={props.name} value={props.value}>
      {props.options.map(item => (
        <option key={item.value} value={item.value}>{item.title}</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: propTypes.arrayOf(propTypes.object).isRequired,
};

export default React.memo(Select);
