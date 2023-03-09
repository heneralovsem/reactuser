import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserPosts from "../components/UserPosts";


const UserPostsPage = () => {
    const params = useParams()
    const [postsData, setPostsData] = useState([])
    console.log(params)
    async function fetchUserPosts() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
        setPostsData(response.data)
        
    }
    useEffect(() => {
        fetchUserPosts()
    }, [])
    console.log(postsData)
    return (
        <div>
            <div className="userposts__wrapper">
                {postsData.map((post) => (<UserPosts key={post.id} body={post.body} title={post.title} postId={post.id} postUserId={post.userId} />))}
            </div>
        </div>
    );
};

export default UserPostsPage;