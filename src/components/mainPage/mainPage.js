import React, {Component} from 'react';
import './mainPage.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import borderImage from "../images/border1.png";
import landScapeImage from "../images/landscape.png";
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import {Pagination, Navigation} from 'swiper/dist/js/swiper.esm'
import Sl1 from '../images/slider/1.jpg';
import Sl2 from '../images/slider/2.jpg';
import Sl3 from '../images/slider/3.jpg';
import Sl4 from '../images/slider/4.jpg';
import Sl5 from '../images/slider/5.jpg';
import Sl6 from '../images/slider/6.jpg';
import {Link} from "react-router-dom";

export default class MainPage extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const params = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 900,
                modifier: 1,
                slideShadows: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        };
        const SimpleSwiper = () => (
            <Swiper {...params} activeSlideKey='5'>
                <div><img src={Sl1} alt=""/></div>
                <div><img src={Sl2} alt=""/></div>
                <div><img src={Sl3} alt=""/></div>
                <div key='5'><img src={Sl4} alt=""/></div>
                <div><img src={Sl5} alt=""/></div>
                <div><img src={Sl6} alt=""/></div>

            </Swiper>
        );
        return (
            <Container fluid={false}>
                <Row>
                    <Col sm={12}>
                        <div className="content">
                            <Row>
                                <Col sm={12}>
                                    <SimpleSwiper/>
                                </Col>
                            </Row>
                            <hr/>
                            <p style={{textAlign: "center"}}><strong>Alumflex®</strong>: предназначен для проектных и
                                монтажных организаций, коммерческих
                                компаний и частным лицам
                            </p>
                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={6}>
                                            <p>Концепция разграничения твердых поверхностей алюминием имеет четкие и
                                                определенные преимущества:</p>
                                            <ul>
                                                <li>
                                                    Быстрая и простая установка
                                                </li>
                                                <li>
                                                    Прочный и универсальный материал
                                                </li>
                                                <li>
                                                    Больше возможностей для ландшафтных решений
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col sm={6}>
                                            <img src={borderImage} alt=""/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={6}>
                                            <p><strong>Креативный дизайн ландшафта</strong></p>
                                            <ul>
                                                <li>
                                                    Чистые незаметные линии
                                                </li>
                                                <li>
                                                    Легко создавать изогнутые или прямые края
                                                </li>
                                                <li>
                                                    Надежный и универсальный
                                                </li>
                                                <li>
                                                    Работает со всеми типами твердых покрытий
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col sm={6}>
                                            <img src={landScapeImage} alt=""/>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <Link to="/why">
                            <div className="content">
                                Почему AlumFlex?
                            </div>
                        </Link>
                    </Col>
                    <Col sm={3}>
                        <Link to="/installation">
                            <div className="content">
                                Монтаж
                            </div>
                        </Link>
                    </Col>
                    <Col sm={3}>
                        <Link to="/spec">
                            <div className="content">
                                Спецификации
                            </div>
                        </Link>
                    </Col>
                    <Col sm={3}>
                        <Link to="/where">
                            <div className="content">
                                Где приобрести
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
