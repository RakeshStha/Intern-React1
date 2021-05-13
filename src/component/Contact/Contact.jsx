import React from 'react'
import '../Contact/contact.css'

const Contact = () => {
    return (
        <div className="content">
            <div className="container">
                <form action="" className="form" method="post">
                    <h1>Contact Us</h1>
                    <p className="p">Rakesh Shrestha</p>
                    <p className="p">Lalitpur, Nepal</p>
                    <p className="p">Phone: 9812345678</p>
                    <div className="contents">
                    <div className="inside">
                            <input type="text"  placeholder="First Name"/>
                        </div>
                        <div className="inside">
                            <input type="text"  placeholder="Last Name"/>
                        </div>
                        <div className="inside">
                            <input type="text"  placeholder="Email Address"/>
                        </div>
                        <div className="inside">
                            <textarea name="" id="" cols="30" rows="5" placeholder="Your message"></textarea>
                        </div>
                        <div className="button">
                            <input type="submit" class="btn" />
                        </div>
                    </div>
                        

                       
                        
                </form>
           </div>
        </div>
           

    )
}

export default Contact
