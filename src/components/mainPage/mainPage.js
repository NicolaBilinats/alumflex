import React, {Component} from 'react';
import './mainPage.css';
import {Col, Container, Row} from "react-bootstrap";
import borderImage from "../images/border1.png";
import landScapeImage from "../images/landscape.png";
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import Sl1 from '../images/slider/1.jpg';
import Sl2 from '../images/slider/2.jpg';
import Sl3 from '../images/slider/3.jpg';
import Sl4 from '../images/slider/4.jpg';
import Sl5 from '../images/slider/5.jpg';
import Sl6 from '../images/slider/6.jpg';

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
            <Swiper {...params}>
                <div><img src={Sl1} alt=""/></div>
                <div><img src={Sl2} alt=""/></div>
                <div><img src={Sl3} alt=""/></div>
                <div><img src={Sl4} alt=""/></div>
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
                            {/*<Row>*/}
                                {/*<Col sm={12}>*/}
                                    {/*<h5>Алюминиевый бордюр для ландшафтных работ.*/}
                                        {/*Чистое решение благоустройства территории</h5>*/}
                                {/*</Col>*/}
                            {/*</Row>*/}
                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={6}>
                                            <p><strong>Простота монтажа</strong></p>
                                            <p><strong>Прочность</strong></p>
                                            <p><strong>Долговечность</strong></p>
                                            Концепция разграничения твердых поверхностей алюминием имеет четкие и определенные преимущества:
                                        </Col>
                                        <Col sm={6}>
                                            <img src={borderImage} alt=""/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} style={{textAlign: "center"}}>
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
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <p><strong>Креативный дизайн ландшафта</strong></p>
                                    <Row>
                                        <Col sm={6}>
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
                                    <Row>
                                        <Col sm={12}>
                                            Alumflex®: предназначен для проектных и монтажных организаций, коммерческих компаний и частным лицам
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <div className="content">
                            hello
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="content">
                            hello
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="content">
                            hello
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="content">
                            hello
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
