import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
    const { user } = useAuth();
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Welcome, {user ? `${user.username} to our website` : `to our website`}</p>
                            <h1>Why Choose Us?</h1>
                            <p>
                                <b>Expertise:</b> Our team consists of experienced IT professionals who
                                are passionate about staying up-to-date with the latest industry
                                trends.
                            </p>
                            <p>
                                <b>Customization:</b> We understand that every business is unique.
                                That's why we create solutions that are tailored to your specific
                                needs and goals.
                            </p>
                            <p>
                                <b>Customer-Centric Approach:</b> We prioritize your satisfaction and provide
                                top-notch support to address your IT concerns.
                            </p>
                            <p>
                                <b>Affordability:</b> We offer competitive pricing without compromising on the 
                                quality of our services.
                            </p>
                            <p>
                                <b>Reliability:</b> Count on us to be there when you need us. We're committed
                                to ensuring your IT environment is reliable and available 24/7. 
                            </p>
                            <div className="btn btn-group">
                                <NavLink to="/contact">
                                    <button className="btn">Connect Now</button>
                                </NavLink>
                                <button className="btn secondary-btn">Learn More</button>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="/images/Home.png" alt="coding together" width="500" height="500" />
                        </div>
                    </div>
                </section>
            </main>
            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Company registers</p>
                    </div>
                    <div className="div1">
                        <h2>150+</h2>
                        <p>Projects Done</p>
                    </div>
                    <div className="div1">
                        <h2>100,000+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>650K+</h2>
                        <p>Subscribers</p>
                    </div>
                </div>
            </section>
        </>
    );
};
