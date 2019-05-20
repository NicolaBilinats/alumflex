import React, {Component} from 'react';
import SideBar from "react-side-bar";
import './sidebar.css';
import {Button} from "react-bootstrap";
import MainPage from "../mainPage";

export default class AlumSideBar extends Component {

    state = {
        barOpened: false,
        duration: 550,
        fx: 'cubic-bezier(0, 1, 0.85, 1)',
        side: 'left',
        size: 256,
        tolerance: 70,
        topBarIncluded: true,
        touch: true,
        touchSize: 80
    };

    toggleBar = () => {
        this.setState({barOpened: !this.state.barOpened});
    };

    onOpen = () => {
        this.setState({barOpened: true});
    };

    onClose = () => {
        this.setState({barOpened: false});
    };

    render() {
        const {
            barOpened, duration, fx, side, size, tolerance,
            topBarIncluded, touch, touchSize
        } = this.state;
        const navIconClassName = ['nav-icon'];

        if (barOpened) {
            navIconClassName.push('open');
        }
        const bar = (
            <div className='side'>
                <Button variant="light" className="side-bar-button">Главная</Button>
                <Button variant="light" className="side-bar-button">Почему AlumFlex</Button>
                <Button variant="light" className="side-bar-button">Монтаж</Button>
                <Button variant="light" className="side-bar-button">Спецификации</Button>
                <Button variant="light" className="side-bar-button">Где приеобрести</Button>
            </div>
        );
        const topBar = (<div className='topBar'>
            <div className='left'>
                <div
                    className={navIconClassName.join(' ')}
                    onClick={this.toggleBar}>
                    <span/><span/><span/><span/>
                </div>
            </div>
            <div className='center'>Alumflex</div>
            <div className='right'></div>
        </div>);

        const sideBarProps = {
            bar: bar,
            duration: duration,
            fx: fx,
            mode: 'over',
            opened: barOpened,
            onOpen: this.onOpen,
            onClose: this.onClose,
            side: side,
            size: size,
            tolerance: tolerance,
            touch: touch,
            touchSize: touchSize,
            veilStyle: {
                opacity: 0.01
            }
        };

        if (topBarIncluded) {
            sideBarProps.topBar = topBar;
        }
        return (
            <SideBar {...sideBarProps}>
                {!topBarIncluded && topBar}
                <div className="main">
                    <MainPage/>
                </div>
            </SideBar>
        );
    }
}
