import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import './_team.scss';

const Team = props => {

    const filterHandler = e => {
        if(e.target.className.includes('all')){
            props.filterHandler('')
        }else if(e.target.className.includes('trim')){
            props.filterHandler('&duty=trim')
        }else if(e.target.className.includes('tactic')){
            props.filterHandler('&duty=tactic')
        }else if(e.target.className.includes('helmsman')){
            props.filterHandler('&duty=helmsman')
        }
    
        const btnFilter = document.querySelectorAll('.btn-filter')
    
        btnFilter.forEach(el => {
          el.classList.remove('active')
    
          if(!e.target.className.includes('active')){
            e.target.className += ' active'
          }
        })
    }


    return (
        <section id="team">
                <h3>Unser Team</h3>
                <h4>Subtitle von unserem team</h4>
                <div className="line"></div>
                <div className="filtration">
                    <button className="active all btn-filter" onClick={filterHandler}>Show all</button>
                    <button className="trim btn-filter" onClick={filterHandler}>Trim</button>
                    <button className="tactic btn-filter" onClick={filterHandler}>Tactic</button>
                    <button className="helmsman btn-filter" onClick={filterHandler}>Helmsman</button>
                </div>

                <div className="container">
                    {
                        props.members?.map(el => (
                            <div key={uuidv4()} className="member-container">
                                <div className="member-main">
                                    <img src={el.image} alt={el.name} />
                                </div>
                                <div className="member-hover">
                                    <p className="member-name">{el.name}</p>
                                    <p className="member-duties">{el.duties}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button style={{display: props.hideLoadMoreBtn && 'none'}} onClick={props.hideLoadMoreBtnHandler} className="load-more-btn">Load More</button>
        </section>
    )
}

export default Team