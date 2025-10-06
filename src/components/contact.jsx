import './contact.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = ({ socialMedia }) => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setResult("Sending...");

    emailjs.sendForm(
      "service_lmh73ef",    // 🔹 replace with your service ID
      "template_123456",   // 🔹 replace with your template ID
      e.target,
      "YOUR_PUBLIC_KEY"     // 🔹 replace with your public key
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setResult("Form Submitted Successfully ✅");
        e.target.reset();
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log("FAILED...", error);
        setResult("Something went wrong ❌");
      }
    );
  };

  return (
    <section id="contact">
      <div className="contact-section">
        <div className="contact-container">
           <div className="contact-header"> 
            <h2 className="contact-subtitle">GET IN TOUCH</h2>
             <h1 className="contact-title">Contact Me</h1> 
             
             <div className="header-decoration">
              </div> 
             <p className="contact-intro"> Let's discuss your project and how I can help bring your ideas to life </p> 
             </div> 
             <div className="contact-content"> 
              {/* Information Panel */} 
              <div className="info-panel">
                 <div className="info-card"> 
                  <h3>Let's Talk</h3>
                   <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p> <div className="contact-details"> 
                    <div className="contact-item"> 
                      <div className="contact-icon">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M22 6L12 13L2 6" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg> </div> <div className="contact-info"> <h4>Email</h4> <p>sumankhatiwada800@gmail.com</p> </div> </div> <div className="contact-item"> <div className="contact-icon"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg> </div> <div className="contact-info"> <h4>Location</h4> <p>Kathmandu, Nepal</p> </div> </div> <div className="contact-item"> <div className="contact-icon"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22 16.92V19.92C22 20.52 21.53 20.99 20.94 21.02C20.56 21.04 20.18 20.99 19.83 20.88C17.7 20.18 15.68 18.97 13.9 17.32C12.37 15.89 11.09 14.17 10.13 12.25C9.36 10.68 8.89 8.98 8.75 7.23C8.73 6.83 8.78 6.43 8.9 6.05C9.12 5.38 9.66 4.88 10.35 4.75C13.15 4.2 15.8 5.42 17.3 7.65C17.57 8.03 17.73 8.48 17.75 8.94C17.78 9.53 17.32 10 16.72 10H14.61C14.07 10 13.63 10.41 13.58 10.95C13.53 11.47 13.73 11.97 14.13 12.3C14.85 12.9 15.68 13.34 16.57 13.59C17.09 13.74 17.5 14.19 17.5 14.73V16.86C17.5 17.42 17.92 17.89 18.47 17.98C18.89 18.04 19.32 17.99 19.71 17.84C20.36 17.58 21.04 17.42 21.74 17.38C21.91 17.37 22.07 17.39 22.23 17.43C22.41 17.48 22.57 17.57 22.71 17.69C22.8 17.77 22.87 17.87 22.92 17.98C22.97 18.09 23 18.21 23 18.33C23 18.46 22.97 18.59 22.92 18.71C22.87 18.82 22.8 18.92 22.71 19C22.57 19.12 22.41 19.21 22.23 19.26C22.07 19.3 21.91 19.32 21.74 19.31H19.63" stroke="#6e45e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg> </div> <div className="contact-info"> <h4>Phone</h4> <p>+977 9841000000</p> </div> </div> </div> <div className="social-media-section"> <h4>Follow Me</h4> <div className="social-media-grid"> {socialMedia.map((social, index) => (<a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social-media-item" > <div className="social-icon"> {typeof social.image === 'object' ? (social.image) : (<img src={social.image || 'default-image.png'} alt={social.name} />)} </div> <span>{social.name}</span> </a>))} </div> </div> </div> </div> {/* Contact Form */} <div className="form-panel"> <div className="form-card"> <h3>Send a Message</h3> <form onSubmit={onSubmit} className="contact-form"> <div className="form-group"> <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required /> </div> <div className="form-group"> <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required /> </div> <div className="form-group"> <textarea name="message" placeholder="Your Message*" value={formData.message} onChange={handleInputChange} rows="5" required ></textarea> </div> <button type="submit" className="submit-btn"> Send Message <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg> </button> {result && <div className="form-result">{result}</div>} </form> </div> </div> </div> </div> <footer className="footer"> <div className="footer-content"> <div className="footer-divider"></div> <p>Made with ❤ by Suman Khatiwada ©2025</p> </div> </footer> </div> </section>
  );
};

export default Contact;
