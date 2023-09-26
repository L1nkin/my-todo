import Login from "../pages/Login";
import React from 'react';
import MyTodoList from "../pages/MyTodoList";


export const publicRoutes = [
    { path: '/login', component: <Login />, exact: true }
]

export const privateRoutes = [
    { path: '/todo', component: <MyTodoList />, exact: true },
    { path: '/about', component: <div style={{ display: 'flex', justifyContent: 'center' }} > About </ div>, exact: true }
]