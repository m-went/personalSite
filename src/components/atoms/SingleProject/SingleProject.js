import styles from './SingleProject.module.scss';

function SingleProject({ name, url, photo, description, transform }) {
  const outsideShape = {
    transform: `${transform}`,
  };
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={`${styles.singleProject}`}>
        <div className={`${styles.imgContainer}`}>
          <img className={`${styles.projectTab}`} src={photo} alt="Project" />
        </div>
        <div className={`${styles.projectInfo}`}>
          <h4 className={`${styles.projectName}`}>{name}</h4>
          <p className={`${styles.description}`}>{description}</p>
        </div>
        <div className={`${styles.singleProjectOutsideColor}`} style={outsideShape}></div>
      </div>
    </a>
  );
}

export default SingleProject;
