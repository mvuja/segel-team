import React, { useState, useEffect } from "react";
import './_news-overlay.scss';
import calendar from '../../Assets/calendar.png'
import logoOverlay from '../../Assets/logo-overlay.png'
import fb from '../../Assets/fb-white.png'
import twitter from '../../Assets/twitter-white.png'
import google from '../../Assets/google-white.png'
import x from '../../Assets/x.png'
import slider from '../../Assets/slider.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const NewsOverlay = props => {

    const [currentNews, setCurrentNews] = useState({})

    useEffect(() => {
        if(props.newsClicked === 1){
            setCurrentNews(props.allNews[0])
        }else if(props.newsClicked === 2){
            setCurrentNews(props.allNews[1])
        }else if(props.newsClicked === 3){
            setCurrentNews(props.allNews[2])
        }
    }, [props.newsClicked])


    return (
        <section style={{display: props.openNewsOverlay && 'block'}} id="news-overlay">

            <div onClick={props.closeNewsOverlayHandler} className="overlay"></div>

            <div className="container">

                <div className="outer-elements">
                    <img className="logo-overlay" src={logoOverlay} alt="Segel Team Logo" />
                    <button className="close-overlay" onClick={props.closeNewsOverlayHandler}>
                        <img src={x} alt="Close Modal" />
                    </button>
                    <a href="https://www.facebook.com/" target='_blank'>
                        <img src={fb} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/" target='_blank'>
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.google.com/" target='_blank'>
                        <img src={google} alt="Google Plus" />
                    </a>
                </div>


                <div className="news-date">
                    <img src={calendar} alt="Calendar" />
                    <span>{currentNews.date}</span>
                </div>
                <h3 className="news-title">{currentNews.title}</h3>
                {
                    currentNews.subtitle &&
                    <p className="news-subtitle">{currentNews.subtitle}</p>
                }
                <div className="line"></div>
                <p className="news-desc">{currentNews.desc}</p>
                <p className="news-desc">{currentNews.desc}</p>
                <div className="swiper-container">
                    <Swiper className="slider-container"
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <img src={slider} alt="Placeholder" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider} alt="Placeholder" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider} alt="Placeholder" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p className="news-desc">{currentNews.desc}</p>
            </div>
        </section>
    )
}

export default NewsOverlay