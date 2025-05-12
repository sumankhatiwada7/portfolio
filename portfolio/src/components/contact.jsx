import './contact.css';
import React from 'react';

export const Contact = ({ socialMedia }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ce53f904-c88d-46da-a24b-01593e072813");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="heading-contact">
        <h1>Contact Me</h1>
        <h3>GET IN TOUCH</h3>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Example@gmail.com" />
        <textarea
          name="subject"
          id="subject"
          placeholder="Your message*"
          className="form-control"
          rows="5"
          style={{ height: '165px' }}
        ></textarea>
        <div className="button-form"> <button type="submit">Submit</button></div>
              

        </form>
      </div>
      

      

        <footer>
        <div className="link-socialmedia">
        {socialMedia.map((social, index) => (
          <div className="social-mediacard" key={index}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <div className="img-socialmedia">
              
                {typeof social.image === 'object' ? (
                  social.image
                ) : (
                  <img src={social.image || 'default-image.png'} alt={social.name} />
                )}
              </div>
              <div className="name-socialmedia">
                <p>{social.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
          <div className="footer">
          <hr />
          <p>Made by ❤ by Suman Khatiwada ©2025</p>
          </div>        
          </footer>

      
      
    </div>
  );
};

export default Contact;