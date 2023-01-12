import styles from './Skills.module.scss';
import SkillInfo from '../../atoms/SkillInfo/SkillInfo';
import { useState } from 'react';
import skillsArray from '../../../assets/data/skills';

function Skills(props) {
  const [chosenSkill, setChosenSkill] = useState({
    name: '',
    description: 'Click on skill icon to show my brief experience description',
  });
  const selectSkill = (skill) => {
    setChosenSkill(skill);
  };
  const skills = skillsArray.map((skill) => {
    return (
      <li key={skill.name} onClick={() => selectSkill(skill)}>
        <SkillInfo skillName={skill.name} icon={skill.icon} bgColor={skill.bgColor} />
      </li>
    );
  });
  return (
    <section id="skills" className={`${styles.skills}`}>
      <h2>Ok Michał, show us what You've got!</h2>
      <div className={`${styles.skillsFrame}`}>
        <div className={`${styles.skillsInfo}`}>
          <div className={`${styles.skillsText}`}>
            <h3>
              Currently I'm working on improving my React skills and other basics in every shown technology. Also, I'm
              planning to learn typescript and MySQL database basics. What is gonna be next? We will see...
            </h3>
          </div>
          <ul className={`${styles.skillsList}`}>{skills}</ul>
        </div>
        <div className={`${styles.chosenSkillDescription}`}>
          <h3>{chosenSkill.name}</h3>
          <p>{chosenSkill.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
