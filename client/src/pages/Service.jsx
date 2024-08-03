import { useAuth } from "../store/auth";

export const Service = () => {
    const {services} = useAuth();
    return (
        <section className="section-services">
            <div className="container3">
                <h1 className="main-heading1">Services</h1>
            </div>
            <div className="container grid grid-three-cols">
                { services.map((curElem,index)=>{
                    const {price, description, provider, service} = curElem;
                    return(
                      <div className="card" key={index}>
                    
                      <div className="card-img">
                          <img src="/images/service.png" alt="our services info"
                          width="500" />
                      </div>
                      <div className="card-details">
                          <div className="grid grid-two-cols">
                              <p>{provider}</p>
                              <p>{price}</p>
                          </div>
                          <h2>{service}</h2>
                          <p>{description}</p>
                      </div>
                  </div>  );
                })}
                
            </div>
        
        </section>
    )
};