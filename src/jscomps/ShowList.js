import { Icon } from '@material-ui/core';
import React from 'react';
import IconTrash from './IconTrash';

const ShowList = props => {
  const renderList = props.list.map((item, index) => {
    return (
    <>
    <br />
      <div key={index} className ="flex justify-between">
       {item.item} <IconTrash text={item.item} handleClickIcon={props.handleClickIcon} />
      </div>
      <br />
    </>

    );
  });

  return <> {props.list && renderList}</>;
};

export default ShowList;
