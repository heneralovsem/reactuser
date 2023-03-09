import React, { useState } from "react";
import cl from './UserBlock.module.css'
import axios from "axios";
import { Modal } from "@mui/material";
import AlbumBlock from "./AlbumBlock";
import {useNavigate} from 'react-router-dom'
const UserBlock = (props) => {
    const navigate = useNavigate()
    const getId = () => {
        navigate(`/users/${props.id}`)
    }
    const [albumData, setAlbumData] = useState([])
    const [open, setOpen] = useState(false)
    function openModal() {
        setOpen(true)
    }
    function closeModal() {
        setOpen(false)
    }
    async function fetchAlbums() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.id}/albums`)
        setAlbumData(response.data) 
        openModal()
        
    }
    
    return (
        <div className={cl.userblock__wrapper}>
            <h1>{props.name}</h1>
            <p>{props.username}</p>
            <p>{props.email}</p>
            <button onClick={fetchAlbums}>albums</button>
            <button onClick={getId}>posts</button>
            <Modal open ={open} onClose={closeModal} >
                <div className={cl.album__wrapper}>
                    {albumData.map((album) => (<AlbumBlock key={album.id} userId={album.userId} albumId={album.id} title={album.title}/>))}
                </div>
            </Modal>
        </div>
    );
};

export default UserBlock