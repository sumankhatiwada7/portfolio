import './skills.css';

const Skills = ({ skills }) => {
  return (
    <div className="skills-section">
      <div className="skills-heading">
        <h2>Skills</h2>
        <p className="subheading">MY  SKILLS</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>Lorem ipsum text dummy</p>
            </div>
            <span className="arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
