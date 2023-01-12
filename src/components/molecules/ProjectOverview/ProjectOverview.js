import ProjectsCarousel from '../../atoms/ProjectsCarousel/ProjectsCarousel';
import SingleProject from '../../atoms/SingleProject/SingleProject';
import styles from './ProjectOverview.module.scss';

function ProjectOverview({ visibleProject, allProjects, handleNextClick, handlePreviousClick }) {
  return (
    <>
      <ProjectsCarousel
        projects={allProjects}
        visibleProject={visibleProject}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
      />

      <div className={`${styles.buttonsContainer}`}>
        {visibleProject.githubURL ? (
          <a href={visibleProject.githubURL}>
            <button className={`${styles.urlButton}`}>
              <span>Show code</span>
            </button>
          </a>
        ) : null}
        <a href={visibleProject.url}>
          <button className={`${styles.urlButton}`}>
            <span>Show project</span>
          </button>
        </a>
      </div>
      <SingleProject visibleProject={visibleProject} key={visibleProject.url} />
      <p className={`${styles.nextProjects}`}>And more to come...</p>
    </>
  );
}

export default ProjectOverview;
