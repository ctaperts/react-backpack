import React from 'react';

import classes from './Item.scss';

const item = ({ name, onDelete }) => {
  return (
    <div className={classes.Item}>
      <input
        type="checkbox"
        className={classes.ItemCheck}
        onClick={onDelete}
      />
      <span className={classes.ItemContent}> {name} </span>
    </div>
  );
};

export default item;
