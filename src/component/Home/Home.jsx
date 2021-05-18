import React from 'react';
import '../Home/home.css';





const Home = () => {
    return (
        <div className="home">
            <div className="body">
                <div className="content-1">
                    <img src="assets/images/pic.jpg" alt="My-Pic" height="85%" width="80%" />
                </div>
                <div className="content-2">
                        <h1>Hello there,</h1>
                        <h2>Welcome to my website</h2>
                        <p className="content-2-p"><span className="name"> I am Rakesh Shrestha </span><br></br>
                        <span style={{
                            fontSize: '20px',
                            color:'black'
                        }}
                        > Software Developer (MERN Stack)</span></p>
                </div>
            </div>
           

        </div>
    )
}

export default Home
