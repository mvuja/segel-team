import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import NewsOverlay from "../NewsOverlay/NewsOverlay";
import './_news.scss';
import calendar from '../../Assets/calendar.png'

const news = [
    {
        date: '23 MAI 2021',
        title: 'News Headline',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis.',
        class: 'news-small news-1',
    },
    {
        date: '23 MAI 2021',
        title: 'News Headline',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis.',
        class: 'news-small news-small--black news-2',
    },
    {
        date: '17 MAI 2021',
        title: 'Headline Beitrag 2021',
        subtitle: 'Subtitle',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis, distinctio culpa, eaque labore ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi perspiciatis.',
        class: 'news-large news-3',
    }
]

const News = () => {

    const [openNewsOverlay, setOpenNewsOverlay] = useState(false)
    const [allNews, setAllNews] = useState(news)
    const [newsClicked, setNewsClicked] = useState(0)


    useEffect(() => {
        const root = document.getElementsByTagName( 'html' )[0]
        
        if(openNewsOverlay){
            document.querySelector('body').classList.add('no-scroll')
            root.classList.add('no-scroll')
        }else{
            document.querySelector('body').classList.remove('no-scroll')
            root.classList.remove('no-scroll')
        }
    }, [openNewsOverlay])

    const openNewsOverlayHandler = e => {
        if(e.currentTarget.classList.contains('news-1')){
            setNewsClicked(1)
        }else if(e.currentTarget.classList.contains('news-2')){
            setNewsClicked(2)
        }else if(e.currentTarget.classList.contains('news-3')) {
            setNewsClicked(3)
        }
        setOpenNewsOverlay(true)
    }


    const closeNewsOverlayHandler = e => {
        setOpenNewsOverlay(false)
    }


    return (
        <>
            <section id="news">
                {
                    news.map(el => (
                        <div key={uuidv4()} onClick={openNewsOverlayHandler} className={el.class}>
                            <div className="news-date">
                                <img src={calendar} alt="Calendar" />
                                <span>{el.date}</span>
                            </div>
                            <h3 className="news-title">{el.title}</h3>
                            {    
                                el.subtitle &&
                                <p className="news-subtitle">{el.subtitle}</p>
                            }
                            <p className="news-desc">{el.desc}</p>
                        </div>
                    ))
                }
            </section>
            <NewsOverlay
            openNewsOverlay={openNewsOverlay}
            closeNewsOverlayHandler={closeNewsOverlayHandler}
            // newsDate={newsDate}
            // newsTitle={newsTitle}
            allNews={allNews}
            newsClicked={newsClicked}
            />
        </>
    )
}

export default News