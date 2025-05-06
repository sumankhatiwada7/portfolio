import './homepage.css';
import './mediaquery.css'
import Luffy from '../media/luffy.png';
 const homepage = () => {
  return (
   
    <div className="home">
    <div className="lefthomepage">
          <div className="welcomemessage">
            <h1>Web Developer</h1>
          </div>
          <div className="button-hireme">
            <button>Hire Me</button>
          </div>
    </div>
    <div className="img-luffy">
    <img src={Luffy} alt="" />
    </div>
    
    <div className="righthomepage">
    <div className="name">
  <span id="first">SUMAN</span>
  <span id="second">KHATIWADA</span>
</div>

    </div>
    </div>
  )
}
export default homepage;
