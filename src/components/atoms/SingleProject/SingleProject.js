import styles from './SingleProject.module.scss';

function SingleProject({ visibleProject }) {
  return (
    <div className={`${styles.singleProject}`}>
      <div className={`${styles.projectInfo}`}>
        <h4 className={`${styles.projectName}`}>{visibleProject.name}</h4>
        <p className={`${styles.description}`}>{visibleProject.description}</p>
      </div>
    </div>
  );
}

export default SingleProject;
