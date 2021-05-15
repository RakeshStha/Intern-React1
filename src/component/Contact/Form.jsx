import React, {useState} from "react"
import Contact from "./Contact"
import "./validation"
import Message from "./Message"

const Form = () => {

    const [formIsSubmitted, setFormSubmitted] = useState(false);

    const submitForm = () => {
        setFormSubmitted(true);
    }

    return (
        <div>
            {!formIsSubmitted ? (
                <Contact submitForm={submitForm} />
            ) : (
                <Message />
            )}
            
        </div>
    )
}

export default Form
