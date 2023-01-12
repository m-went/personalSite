import styles from './ProjectsCarousel.module.scss';

function ProjectsCarousel({ projects, visibleProject, handleNextClick, handlePreviousClick }) {
  const slides = projects.map((project) => {
    /*  const nextProjectNum = (parseFloat(project.id.slice(-2)) + 1).toString().padStart(2, '0');
    const nextProjectLink = project.id.slice(0, 8) + nextProjectNum;

    const prevProjectNum = (parseFloat(project.id.slice(-2)) - 1).toString().padStart(2, '0');
    const prevProjectLink = project.id.slice(0, 8) + prevProjectNum; */

    return (
      <li className={`${styles.carousel__item}`} id={project.id}>
        <div className={`${styles.carousel__slide}`}>
          <img src={visibleProject.photo} alt="Screen of chosen project" className={`${styles.carousel__image}`} />
        </div>
        <div
          onClick={handlePreviousClick}
          title="Previous project"
          className={`${styles.carousel__nav} ${styles.carousel__nav__prev}`}
        >
          Previous slide
        </div>
        <div
          onClick={handleNextClick}
          title="Next project"
          className={`${styles.carousel__nav} ${styles.carousel__nav__next}`}
        >
          Next slide
        </div>
      </li>
    );
  });
  return (
    <div className={`${styles.carousel}`}>
      <ul className={`${styles.carousel__list}`}>{slides}</ul>
      <div className={`${styles.carousel__navDummy} ${styles.carousel__navDummy__prev}`} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={`${styles.icon}`}>
          <path d="M11.4 0l1.4 1.3L5.9 8l6.9 6.7-1.4 1.3-6.9-6.7L3.2 8l1.4-1.3L11.4 0z" />
        </svg>
      </div>
      <div className={`${styles.carousel__navDummy} ${styles.carousel__navDummy__next}`} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={`${styles.icon}`}>
          <path d="M4.6 16l-1.4-1.3L10.1 8 3.2 1.3 4.6 0l6.9 6.7L12.8 8l-1.4 1.3L4.6 16z" />
        </svg>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
