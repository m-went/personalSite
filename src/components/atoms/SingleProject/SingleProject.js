import styles from './SingleProject.module.scss';

function SingleProject({ name, url, photo, description }) {
  const backgroundPhoto = { backgroundImage: `url(${photo})` };
  return (
    <div className={`${styles.singleProject}`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className={`${styles.projectTab}`} src={photo} alt="Project" />
        {/* <div className={`${styles.projectTab}`} style={backgroundPhoto}></div> */}
        <h4 className={`${styles.projectName}`}>{name}</h4>
        <p className={`${styles.description}`}>{description}</p>
      </a>
    </div>
  );
}

export default SingleProject;
