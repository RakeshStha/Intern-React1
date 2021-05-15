import React, {useState, useEffect} from 'react'
import '../Contact/contact.css'
import validation from './validation'
import "./Form"



const Contact = ({submitForm}) => {

    const [values, setValues] = useState({
        fname: "",
        lname: "",
        emai: "",
        message: ""
    })
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors])

    const handleChange = (event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    })
   
    return (
        <div className="content">
            <div className="container">
                <form action="" className="form" method="post" >
                    <h1>Contact Us</h1>
                    <p className="p">Rakesh Shrestha</p>
                    <p className="p">Lalitpur, Nepal</p>
                    <p className="p">Phone: 9812345678</p>
                    <div className="contents">
                    <div className="inside">
                            <input type="text" 
                            name = "fname"
                            value= {values.fname}
                            onChange = {handleChange}
                            placeholder="First Name"/>
                            {errors.fname && <p className="error">{errors.fname}</p>}
                        </div>
                        <div className="inside">
                            <input type="text"  
                            name="lname"
                            value= {values.lname}
                            onChange = {handleChange}
                            placeholder="Last Name"/>
                            {errors.lname && <p className="error">{errors.lname}</p>}
                        </div>
                        <div className="inside">
                            <input type="text" 
                            name="email" 
                            value = {values.email}
                            onChange = {handleChange}
                            placeholder="Email Address"/>
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="inside">
                            <textarea id="" 
                            cols="30" rows="5" 
                            name="message"
                            value = {values.message}
                            onChange = {handleChange}
                            placeholder="Your message"></textarea>
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>
                        <div className="button">
                            <input type="submit"  onClick = {handleFormSubmit} class="btn" />
                        </div>
                    </div>
                        

                       
                        
                </form>
           </div>
        </div>
           

    )
}

export default Contact
