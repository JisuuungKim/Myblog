import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {MainPage} from './page/MainPage';
import {PlaylistPage} from "./page/PlaylistPage";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";

function App(){

    return <>
        <Header/>
        <Switch>
            <Route exact path="/"><MainPage/></Route>
            <Route path="/playlist"><PlaylistPage/></Route>
        </Switch>
        <Footer/>

    </>;
}
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
