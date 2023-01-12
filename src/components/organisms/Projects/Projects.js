import styles from './Projects.module.scss';
import ProjectOverview from '../../molecules/ProjectOverview/ProjectOverview';
import allProjects from '../../../assets/data/projects';
import { useState } from 'react';

function Projects(props) {
  const [visibleProject, setVisibleProject] = useState(allProjects[0]);

  const handleNextClick = () => {
    let idx;

    for (let i = 0; i < allProjects.length; i++) {
      if (allProjects[i].id === visibleProject.id) {
        idx = i;
      }
    }

    let nextIdx;
    if (idx + 1 >= allProjects.length) {
      nextIdx = 0;
    } else nextIdx = idx + 1;
    setVisibleProject(allProjects[nextIdx]);
  };
  const handlePreviousClick = () => {
    let idx;
    for (let i = 0; i < allProjects.length; i++) {
      if (allProjects[i].id === visibleProject.id) {
        idx = i;
      }
    }
    let nextIdx;
    if (idx - 1 < 0) {
      nextIdx = allProjects.length - 1;
    } else nextIdx = idx - 1;
    setVisibleProject(allProjects[nextIdx]);
  };

  /* 
    const nextProjectNum = (parseFloat(visibleProject.id.slice(-2)) + 1).toString().padStart(2, '0');
    const nextProjectLink = visibleProject.id.slice(0, 8) + nextProjectNum;
    const prevProjectNum = (parseFloat(visibleProject.id.slice(-2)) - 1).toString().padStart(2, '0');
    const prevProjectLink = visibleProject.id.slice(0, 8) + prevProjectNum; */

  return (
    <section id="projects" className={`${styles.projects}`}>
      <h2>So, You want to see, what I have already done?</h2>
      <div className={`${styles.projectsFrame}`}>
        <ProjectOverview
          visibleProject={visibleProject}
          allProjects={allProjects}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      </div>
    </section>
  );
}

export default Projects;
