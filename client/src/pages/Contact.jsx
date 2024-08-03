import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};

export const Contact = () => {

    const[contact, setContact] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);

    const {user} = useAuth();

    if(userData && user){
        setContact({
            username: user.username,
            email: user.email,
            message:"",
        });

        setUserData(false);
    }

    const handleInput=(e) =>{
        const name =e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });

    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log(contact);
        try {
            const response = await fetch("http://localhost:5000/api/form/contact",
                {method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(contact),
        });
        if(response.ok){
            setContact(defaultContactFormData);
            const data= await response.json();
            console.log(data);
            alert('Message send successfully')
        }            
        } catch (error) {
            alert("message not send");
            console.log(error);
            
            
        }
    };
    return (<>
    <section className="section-contact">
       <div className="content-content container">
           <h1 className="main-heading"> Contact us</h1>
       </div>
       <div className="conatiner grid grid-two-cols">
        <div className="contact-img">
            <img src="/images/contact.png" alt="conatct"
            height="500"
            width="500"/>

        </div>

        <section className="section-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                    name="username"
                    id="username"
                    autoComplete="off"
                    required
                    value={contact.username}
                    onChange={handleInput}/>

                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name="email"
                    id="email"
                    autoComplete="off"
                    required
                    value={contact.email}
                    onChange={handleInput}/>

                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message"
                    id="message"
                    autoComplete="off"
                    required
                    value={contact.message}
                    onChange={handleInput}
                    cols="30"
                    rows="10"></textarea>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </section>
       </div>

       <section className="mb-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28018.322631703653!2d77.06992530371953!3d28.621059464810024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ba6b064d0f%3A0xf609cdf712fe603e!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1721814032856!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            allowfullscreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </section>
    </section>
    </>)
};