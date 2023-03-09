import React from "react";
import cl from './AlbumBlock.module.css'
const AlbumBlock = (props) => {
    return (
        <div className={cl.albumblock__wrapper}>
            <p>user id: {props.userId}</p>
            <p>album id: {props.albumId}</p>
            <p>album title: {props.title}</p>
        </div>
    );
};

export default AlbumBlock