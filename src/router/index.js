import { Navigate } from "react-router-dom";
import UserPostsPage from "../pages/UserPostsPage";
import UsersPage from "../pages/UsersPage";

export const routes = [
    {path: '/users', component: <UsersPage/>},
    {path: '/', component: <Navigate to= "users" replace/> },
    {path: '/users/:id', component: <UserPostsPage/>},

]