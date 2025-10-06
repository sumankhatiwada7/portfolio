import './homepage.css';
import './mediaquery.css';
import Luffy from '../media/luffy.png';
import { useEffect, useRef } from 'react';

const Homepage = () => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const welcomeRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animation on component mount
    const timer = setTimeout(() => {
      if (welcomeRef.current) {
        welcomeRef.current.style.opacity = '1';
        welcomeRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    const timer2 = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.opacity = '1';
        buttonRef.current.style.transform = 'translateY(0)';
      }
    }, 600);

    const timer3 = setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.style.opacity = '1';
        imageRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    }, 900);

    const timer4 = setTimeout(() => {
      if (firstTextRef.current) {
        firstTextRef.current.style.opacity = '1';
        firstTextRef.current.style.transform = 'translateY(0)';
      }
    }, 1200);

    const timer5 = setTimeout(() => {
      if (secondTextRef.current) {
        secondTextRef.current.style.opacity = '1';
        secondTextRef.current.style.transform = 'translateY(0)';
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const handleHireMe = () => {
    // Add smooth scroll to contact section or other action
    console.log("Hire me button clicked!");
  };

  return (
    <section id="home">
      <div className="home">
        <div className="lefthomepage">
          <div className="welcomemessage" ref={welcomeRef}>
            <h1>Web Developer</h1>
            <p>Creating digital experiences that stand out</p>
          </div>
<div className="button-hireme" ref={buttonRef}>
  <a href="#contact">
    <button>Hire Me</button>
  </a>
</div>
        </div>
        
        <div className="img-luffy" ref={imageRef}>
          <img src={Luffy} alt="Luffy character" />
        </div>
        
        <div className="righthomepage">
          <div className="name">
            <span id="first" ref={firstTextRef}>SUMAN</span>
            <span id="second" ref={secondTextRef}>KHATIWADA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;