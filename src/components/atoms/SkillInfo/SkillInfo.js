import styles from './SkillInfo.module.scss';
import { useState, useEffect } from 'react';

function SkillInfo({ skillName, icon, bgColor }) {
  const [isHovering, setIsHovering] = useState(false);
  const skillColors = isHovering ? { backgroundColor: `${bgColor}` } : null;
  const hoverHandler = () => {
    setIsHovering(!isHovering);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsHovering(false);
    }, 3000);
  });

  return (
    <div className={`${styles.nameHide}`}>
      <div
        className={`${styles.skillInfo}`}
        style={skillColors}
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
        data-testid="skillInfo"
      >
        <span />
        <span />
        <span />
        <span />
        <img src={icon} alt="icon" className={`${styles.skillIcon}`} />
        <span className={`${styles.skillName}`}>{skillName} </span>
      </div>
    </div>
  );
}

export default SkillInfo;
