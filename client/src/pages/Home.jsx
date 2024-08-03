
export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the best IT Company</p>
                            <h1>Welcome to Home Page</h1>
                            <p>
                                Are you ready to take your business to the next level with
                                cutting-edge IT solutions?
                                <br/>
                                <br/>
                                Look no further. We offer a wide range of courses and services
                                tailored to your needs. Whether you're looking to enhance your web development skills, dive into data analytics, or master the latest technologies,
                                we have the right program for you. Our courses are designed to provide hands-on experience, ensuring you gain practical skills that can be applied immediately.
                                Explore our services section to discover our comprehensive course offerings and affordable pricing.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn">Learn more</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="/images/register.png" alt="coding together" width="500" height="500" />
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
                        <h2>250+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>650K+</h2>
                        <p>Subscribers</p>
                    </div>
                </div>
            </section>
            <section className="section-getting-started">
                <div className="container grid grid-two-cols">
                    <div className="getting-started-image">
                        <img src="/images/Home.png" alt="Getting started" width="500" height="500" />
                    </div>
                    <div className="getting-started-content">
                        <h2>Getting Started Today</h2>
                        <p>We are here to help you.</p>
                        <p>Join us and embark on your journey to success. Our team of experts is dedicated to providing you with the best resources and support to achieve your goals.</p>
                        <p>Start your learning adventure with us and transform your skills. Let's make great things happen together!</p>
                    </div>
                </div>
            </section>
        </>
    );
};
