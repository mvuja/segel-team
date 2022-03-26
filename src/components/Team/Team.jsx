import React, { useState, useEffect } from "react";
import './_team.scss';

const Team = props => {



    return (
        <section id="team">
                <h3>Unser Team</h3>
                <h4>Subtitle von unserem team</h4>
                <div className="line"></div>
                <div className="filtration">
                    <button>Show all</button>
                    <button>Trim</button>
                    <button>Tactic</button>
                    <button>Helmsman</button>
                </div>

                <div className="container">
                    {
                        props.members?.map(el => (
                            <div className="member-container">
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
                <button className="load-more-btn">Load More</button>
        </section>
    )
}

export default Team