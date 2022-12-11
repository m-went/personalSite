import styles from './Skills.module.scss';
import CssIcon from '../../../assets/icons/css-icon.svg';
import JsIcon from '../../../assets/icons/js-icon.svg';
import HtmlIcon from '../../../assets/icons/html-icon.svg';
import ReactIcon from '../../../assets/icons/react-icon.svg';
import JestIcon from '../../../assets/icons/jest-icon.svg';
import ExpressIcon from '../../../assets/icons/express-icon.svg';
import GitIcon from '../../../assets/icons/git-icon.svg';
import MongoIcon from '../../../assets/icons/mongodb-icon.svg';
import TeamworkIcon from '../../../assets/icons/teamwork-icon.svg';
import EnglishIcon from '../../../assets/icons/english-icon.svg';
import SkillInfo from '../../atoms/SkillInfo/SkillInfo';

function Skills(props) {
  const skillsArray = [
    {
      name: 'Javascript',
      icon: JsIcon,
      bgColor: '#F0DB4F',
    },
    {
      name: 'HTML',
      icon: HtmlIcon,
      bgColor: '#e34c26',
    },
    {
      name: 'CSS',
      icon: CssIcon,
      bgColor: '#2965f1',
    },
    {
      name: 'React',
      icon: ReactIcon,
      bgColor: '#066d89',
    },
    {
      name: 'Jest',
      icon: JestIcon,
      bgColor: 'red',
    },
    {
      name: 'Express',
      icon: ExpressIcon,
      bgColor: '#c7c7c7',
    },
    {
      name: 'Git',
      icon: GitIcon,
      bgColor: '#f1502f',
    },
    {
      name: 'MongoDB',
      icon: MongoIcon,
      bgColor: '#4db33d',
    },
    {
      name: 'Teamwork',
      icon: TeamworkIcon,
      bgColor: '#741c74',
    },
    {
      name: 'English',
      icon: EnglishIcon,
      bgColor: '#012169',
    },
  ];

  const skills = skillsArray.map((skill) => {
    return (
      <li key={skill.name}>
        <SkillInfo skillName={skill.name} icon={skill.icon} bgColor={skill.bgColor} />
      </li>
    );
  });
  return (
    <section className={`${styles.skills}`}>
      <h2>Ok Michał, show us what You've got!</h2>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.skillsInfo}`}>
          <div className={`${styles.skillsText}`}>
            <h3>Right now, my skillset includes: </h3>
            <p>
              Currently I'm working on improving my React skills and other basics in every shown technology. Also, I'm
              planning to learn typescript and MySQL database basics. What is gonna be next? We will see...
            </p>
          </div>
          <ul className={`${styles.skillsList}`}>{skills}</ul>
        </div>
        <div className={`${styles.skillsOutsideColor}`}></div>
      </div>
      <div id="projects" className={`${styles.angle}`} />
    </section>
  );
}

export default Skills;
