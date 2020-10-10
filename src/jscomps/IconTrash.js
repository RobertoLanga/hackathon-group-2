import React from 'react';

const IconTrash = props => {
    console.log(props)
    return (
        <i className="icon trash alternate outline" onClick = {() => props.handleClickIcon(props.text)}></i>
    )
}

export default IconTrash;