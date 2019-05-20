import React, {Component} from 'react';
import './App.css';
import AlumSideBar from "./components/sidebar";
import MainPage from './components/mainPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <AlumSideBar content={MainPage}/>
            </div>
        );
    }
}

