import ventus from '../imgs/ventusV2.png';
import myPage from '../imgs/myPageV4.png';

const allProjects = [
  {
    name: 'Ventus page',
    url: 'https://ventusb.pl',
    photo: ventus,
    githubURL: '',
    description:
      'My first full crud page. I used HTML, CSS, JS, Express, Mongo & Mongoose and Node. Right now I already see a lot of architectural problems and wrong decisions, that I made, but I like to think that it helped me to become better at writing clean code.',
    transform: ' rotate(-10deg) scale(1)',
    id: 'project-01',
  },
  {
    name: 'My personal page',
    url: '/',
    githubURL: 'https://github.com/m-went/personalSite',
    photo: myPage,
    description:
      'As You can see, page to show my humble person. It become some sort of React practise and some styling ideas (also it is my first experience with SASS and I see, that there is a lot to learn about).',
    transform: 'rotate(10deg) scale(1)',
    id: 'project-02',
  },
];

export default allProjects;
