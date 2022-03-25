import React, { useState, useEffect } from "react";
import './_news.scss';
import calendar from '../../Assets/calendar.png'

const News = () => {

    return (
        <section id="news">
            <div className="news-small news-1">
                <div className="news-date">
                    <img src={calendar} alt="Calendar" />
                    <span>23 MAI 2021</span>
                </div>
                <p className="news-title">News Headline</p>
                <p className="news-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis.</p>
            </div>
            <div className="news-small news-2">
                <div className="news-date">
                    <img src={calendar} alt="Calendar" />
                    <span>23 MAI 2021</span>
                </div>
                <p className="news-title">News Headline</p>
                <p className="news-desc news-desc--white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis.</p>
            </div>
            <div className="news-large news-3">
                <div className="news-date news-date--large">
                    <span>17 MAI</span>
                </div>
                <p className="news-title news-title--large">Headline Beitrag 2021</p>
                <p className="news-subtitle">Subtitle</p>
                <p className="news-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit.</p>
            </div>
        </section>
    )
}

export default News