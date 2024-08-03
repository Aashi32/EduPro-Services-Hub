import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";


export const Login = () => {
    const [user, setUser] = useState({
        email:"",
        password: "",
    });

    
    const navigate = useNavigate();
    const {storetokenInLS} = useAuth();

    const handleInput =(e)=>{
        let name =e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value, 
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user)
        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`,{
                method:"POST",
                headers:{
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("login form",response);
            if(response.ok){
                const res_data = await response.json();
                // console.log("res from server", res_data);
                //stored the token in localhost
                storetokenInLS(res_data.token);
                alert("Login successful");
                setUser({ email: "", password:""});
                navigate("/");
                // console.log(response);
            }else{
                alert("Invalid credentials");
                console.log("invalid credentials");
            }

        } catch (error) {
            console.log(error);         
        }
        
    };
    return <>
    <section>
        <main>
            <div className="section-login">
                <div className="container grid grid-two-cols">
                    <div className="login-image">
                        <img src="/images/login.png" alt="login image"
                        height="500"
                        width="500"/>
                    </div>

                    <div className="login-form">
                        <h1 className="main-heading mb-3">Login form</h1>
                        <br/>

                        <form onSubmit={handleSubmit}>
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

                            <button type="submit" className="btn btn-submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
};