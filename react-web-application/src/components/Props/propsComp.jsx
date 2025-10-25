import React from "react";
import './propsComp.css';

export function PropsComp({name, designation, contactNo, backgroundColor, id, fcolor}) {
    
    return (
        <>
            <div className="cardContainer" style={{backgroundColor: backgroundColor, color: fcolor}} id={id}>
                <div className="cardBody">
                    <div className="title">{name}</div>
                    <div className="subTitle">{designation}</div>
                    <div className="contact">{contactNo}</div>                    
                    <div className="description">
                        Software Engineer with 5+ years of experience in developing scalable web applications. Proficient in JavaScript, React, and Node.js. Passionate about building user-friendly interfaces and optimizing performance.
                    </div>
                    <div className="c"></div>
                </div>
            </div>
        </>
    )
} 