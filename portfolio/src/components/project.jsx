import Luffy2 from '../media/luffy2.png';
import './project.css';
import Contact from '../media/contact.png';
import Travel from '../media/travel.png';
import Blackjack from '../media/blackjack.png';

const Project = ({projectData }) => {
  return (
    <div className="project">
      <div className="heading-project">
        <h1>Projects</h1>
        <h2>My Creation</h2>
      </div>
      <div className="project-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="title">
              <h3>{project.title}</h3>
              </div>
              <div className="pargraph">
              <p>{project.pargraph}</p>
              </div>
              <div className="button-project">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                 <button>Github Repo</button>
                   </a>
               </div>

              </div>
        ))}

      </div>
       
    </div>
  );
};

export default Project;