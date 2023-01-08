const QandA = [
  {
    id: '1.0',
    type: 'personal',
    question: 'Tell me more about Yourself',
    answer:
      "It's always the hardest part to tell something about myself, but I'll try ;) I'm almost 30 years old and about 1.5 year ago decided to change my life and began my IT journey. Right now I want to try som real job and if You think, that I'm right person to try - I'll give me best.",
    nextQuestions: [
      {
        id: '1.1',
        question: 'What are Your hobbies?',
        answer:
          'I really like boardgames, video games (my favourite is Europa Universalis or as it is called by my friends: "Excel as Game") and reading books. Some time ago I discovered, that I genuinely like history - it can be really fascinating',
      },
      {
        id: '1.2',
        question: 'What do You expect from future employer?',
        answer:
          'Oh, a tricky question! I want to focus on improving my skills and that can be achieved only by practising them. So I just want to work and learn more and more. I want to experience working in group and looking for observing senior developers and theirs solutions.',
      },
    ],
  },
  {
    id: '2.0',
    type: 'technical',
    question: 'Do You have any experience as developer?',
    answer:
      'If You are asking about general experience, I got only about 1.5 year of self-taught programming experience. I created some projects, but most of them are not finished - when i check what I want, I usually start new project to learn new thing. That is the cause of my small official portfolio.',
    nextQuestions: [
      {
        id: '2.1',
        question: 'What languages do You know?',
        answer:
          'My primary language is JavaScript. Also I know HTML, CSS (I worked with SASS too) and React. In my projects I used NodeJS + Express combo to made backend and used MongoDB to create database. I also learned Jest/React testing library and GIT. I know what is REST, DRY and other main principles.',
      },

      {
        id: '2.2',
        question: 'And what about commercial experience?',
        answer:
          "Unfortunatelly I don't have any. Of course I can tell You that Ventus site can be called as commercial project, but I don't think that making site for actuall employer without any special requirements and deadlines can be called as commercial experience.",
      },
    ],
  },
];

export default QandA;
