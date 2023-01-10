import CssIcon from '../icons/css-icon.svg';
import JsIcon from '../icons/js-icon.svg';
import HtmlIcon from '../icons/html-icon.svg';
import ReactIcon from '../icons/react-icon.svg';
import JestIcon from '../icons/jest-icon.svg';
import GitIcon from '../icons/git-icon.svg';
import MongoIcon from '../icons/mongodb-icon.svg';
import TeamworkIcon from '../icons/teamwork-icon.svg';
import EnglishIcon from '../icons/english-icon.svg';

const skillsArray = [
  {
    name: 'Javascript',
    icon: JsIcon,
    bgColor: '#F0DB4F',
    description:
      "My first language after learnig about HTML and CSS. I spent a lot of time exploring its mysteries (well, at least for me it contained a lot of mysteries ;D), learning about 'this' keyword, async/await syntax and different methods. I hope, that some day I'll be able to show my skills professionally.",
  },
  {
    name: 'HTML',
    icon: HtmlIcon,
    bgColor: '#e34c26',
    description:
      'Every front-end developer starting point - also mine. My entire web journey began with it and I know about important role of semantics elements, so my applications does not contains only divs ;)',
  },
  {
    name: 'CSS',
    icon: CssIcon,
    bgColor: '#2965f1',
    description:
      'After more than year CSS still can amaze me. When I discovered flexbox and grid (and loved first one and having love-hate relationship with second) I though, that I know almost everything. And I was wrong, very, very wrong. I am sure, that I can learn more about best practises, but still - centering a div is not a problem ;) Also worked with SASS (even in this project), so it is not a Terra Incognita.',
  },
  {
    name: 'React',
    icon: ReactIcon,
    bgColor: '#066d89',
    description:
      "When I read about React and its market share I knew, that I need to learn it. Right now I understand why it's so popular and building applications from LEGO-like bricks and bring a lot of fun. I'm not scared, when I need to use React, but I'm not very proficient with Redux yet.",
  },
  {
    name: 'Jest',
    icon: JestIcon,
    bgColor: 'red',
    description:
      "Just when I though that I know enough to search for job, in one of the first offers I saw that magic keyword: 'Jest' and that changed my thinking about development. When I learned Jest (with React Testing library) I also learned about TDD and haw developers should whink about their code on architectural level. I'm still to fresh to fully plan my work according to TDD, but at least I know about it and improving myself day by day.",
  },
  {
    name: 'Git',
    icon: GitIcon,
    bgColor: '#f1502f',
    description:
      "I was shocked, when I learned about importance of GIT and till today I regret that I didn't learned it earlier. Right now I know how helpful it can be and how regular commits can save project after some bad decisions. Also I know about branches, so no - I don't push everything on main ;) Of course I know Github a bit too.",
  },
  {
    name: 'MongoDB',
    icon: MongoIcon,
    bgColor: '#4db33d',
    description:
      'MongoDB was my first experience with databases. I know of their importance and that in most cases SQL databases are more desirable. In future I want to learn about MySQL, but right now I only have some exposure on Mongo + Mongoose (I also used them in one of my projects).',
  },
  {
    name: 'Teamwork',
    icon: TeamworkIcon,
    bgColor: '#741c74',
    description:
      "I don't know why, but I always end as support character when I play boardgames with friends (if it's co-op game of course)... I like to think that it's proof that I know importance of teamplay and how every team should help each other.",
  },
  {
    name: 'English',
    icon: EnglishIcon,
    bgColor: '#012169',
    description:
      "My official English level is B2. I don't have problems when it comes to reading documentation, stack overflow threads or tutorials/articles in English, but my speaking is a bit rusty I suppose.",
  },
];

export default skillsArray;
