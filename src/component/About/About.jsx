import React from 'react'
import '../About/about.css'


const About = () => {
    return (
        <div className="about">
                <div className="about-content">
                        <div className="about-1">
                            <div className="about-detail">
                                <h1>About Me</h1>
                                    <ul>
                                        <li>An undergraduate student of B.Sc.IT(Hons) from Lord Buddha Eduction Foundation Campus.</li>
                                        <li>A freelancer Jr. Web develoepr.</li>
                                        <li>Proven ability in researching and developing new designs that are inovative and designed to meet the needs of both end-users and the environment.</li>
                                    </ul>
                            </div>
                            <div className="line"></div>
                            <div className="about-education">
                                <h1>Education</h1>
                                <ul>
                                    <li>Unversity: Asia pacific University. (Final Year Running).</li>
                                    <li>HSEB: Pinnacle Academy. (2015-2018)</li>
                                    <li>SLC: Hill Top Higher Secondary School. (2004-2015)</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="about-2">    
                                <img src="assets/images/short-pic.jpg" alt="rakesh shrestha" />
                        </div>
            
                </div>
        </div>
        
    )
}

export default About
