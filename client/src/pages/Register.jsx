import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Register = () => {
    const[user, setUser] =useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

    


    const navigate = useNavigate();
    const {storetokenInLS} = useAuth();


    const handleInput=(e)=>{
        console.log(e);
        let name =e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value, //make it dynamic
        });
    };

    //handling form submission

    const handleSubmit= async (e)=>{
        e.preventDefault();
        // alert(user);
        console.log(user);
        try {
        const response = await fetch(`http://localhost:5000/api/auth/register`,{
            method:"POST",
            headers:{
                'Content-Type': "application/json",
            },
            body: JSON.stringify(user),
        });

        const res_data = await response.json();
        console.log("res from server", res_data.extraDetails);
        if(response.ok){

            //stored the token in localhost
            storetokenInLS(res_data.token);
            setUser({ username: "", email:"", phone:"", password:""});
            navigate("/login");
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message);
        }
        console.log(response);
    } catch (error) {
        console.log("register",error);           
    }
};


    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="/images/register.png" alt="register image"
                        height="500"
                        width="500"/>
                    </div>

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration form</h1>
                        <br/>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                name= "username"
                                placeholder="username"
                                id="username"
                                required
                                autoCorrect="off"
                                value={user.username}
                                onChange={handleInput}/>

                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text"
                                name= "email"
                                placeholder="email"
                                id="email"
                                required
                                autoCorrect="off"
                                value={user.email}
                                onChange={handleInput}/>
                                
                            </div>

                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="number"
                                name= "phone"
                                placeholder="phone"
                                id="phone"
                                required
                                autoCorrect="off"
                                value={user.phone}
                                onChange={handleInput}/>
                                
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                name= "password"
                                placeholder="password"
                                id="password"
                                required
                                autoCorrect="off"
                                value={user.password}
                                onChange={handleInput}/>
                                
                            </div>

                            <br/>

                            <button type="submit" className="btn btn-sunmit">Regiser Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>;
};