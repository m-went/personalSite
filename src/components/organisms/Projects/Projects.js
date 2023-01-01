import styles from './Projects.module.scss';
import SingleProject from '../../atoms/SingleProject/SingleProject';
import ventus from '../../../assets/imgs/ventusV2.png';
import myPage from '../../../assets/imgs/myPageV4.png';

function Projects(props) {
  const allProjects = [
    {
      name: 'Ventus page',
      url: 'https://ventusb.pl',
      photo: ventus,
      description: 'My first full crud page using HTML, CSS, JS, Express, Mongo and Node',
      transform: ' rotate(-10deg) scale(1)',
    },
    {
      name: 'My personal page',
      url: '/',
      photo: myPage,
      description: 'As You can see, page to show my humble person',
      transform: 'rotate(10deg) scale(1)',
    },
  ];
  const projects = allProjects.map((p) => {
    return (
      <SingleProject
        name={p.name}
        url={p.url}
        photo={p.photo}
        description={p.description}
        key={p.url}
        transform={p.transform}
      />
    );
  });
  return (
    <section id="projects" className={`${styles.projects}`}>
      <h2>So, You want to see, what I have already done?</h2>
      {projects}
      <p className={`${styles.nextProjects}`}>And more to come...</p>
      <div className={`${styles.angle}`} />
    </section>
  );
}

export default Projects;
