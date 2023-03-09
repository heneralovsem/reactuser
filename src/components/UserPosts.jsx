import React from "react";
import cl from './UserPosts.module.css'
const UserPosts = (props) => {
    return (
        <div className={cl.post__wrapper}>
            <p>Post title: {props.title}</p>
            <p>Post body: {props.body}</p>
            <p>User id: {props.postUserId}</p>
            <p>Post id: {props.postId}</p>
        </div>
    )
}

export default UserPosts