import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Book from './pages-user/Book';

import List from './pages-user/List';
import UserLogin from './pages-user/UserLogin';

import MyBook from './pages-user/MyBook';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
                <Route path="/list" component={List} />
                <Route path="/book/:id" component={Book} />
                <Route path="/user-login" component={UserLogin} />
                <Route path="/my-book" component={MyBook}/>
            </Switch>
        </BrowserRouter>
    );
}