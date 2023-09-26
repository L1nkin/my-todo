import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import MyTodoList from '../pages/MyTodoList';
import { AppContext } from '../context';
import { privateRoutes, publicRoutes } from './Routes';

const AppRouter = () => {
        const { isAuth } = useContext(AppContext)

        return (
                isAuth
                        ? <Routes>
                                {privateRoutes.map(router => <Route exact={router.exact} element={router.component} path={router.path} key={router.path} />)}
                                <Route exact path="*" element={<Navigate to="/todo" />} />
                        </Routes>
                        : <Routes>
                                {publicRoutes.map(router => <Route exact={router.exact} element={router.component} path={router.path} key={router.path} />)}
                                <Route exact path="*" element={<Navigate to="/login" />} />
                        </Routes>
        );
}

export default AppRouter;