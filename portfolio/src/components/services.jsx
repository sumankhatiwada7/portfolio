import './service.css';
import './mediaquery.css';

 const services = ({services}) => {
  return (
    <div className="service">
        <div className="serviceheading">
            <h1>Services</h1>
            <h2>what i offer</h2>
        </div>
        <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="img-container">
            <img src={service.img}  className="service-icon" />
            </div>
          
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.pargraph}</p>
            </div>
          
          </div>
        ))}
        </div>

        
    </div>
  )
}
export default services;