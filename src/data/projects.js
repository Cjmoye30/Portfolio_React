// this file will store all of my projects which will then get pulled into the Projects component - meaning that I define all of the project fields in this file which will then dynamically be rendered on the projects page after I import this file

// Can I single out my first project out of all my other items in the array?
// main project/centerpiece should always be at index 0

const projects = [
    // ------------ Main project ------------
    {
        title: 'DreamerGPT',
        imageURL: require('../assets/images/DreamerGPT.png'),
        description: 'ChatGPT to interpret dreams',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'image alt text here',
        repo: 'https://github.com/Cjmoye30/Dream_Catcher',
        site: 'https://protected-hamlet-16560.herokuapp.com/',
    },

    // ------------ Other projects ------------
    {
        title: 'TechBlog',
        imageURL: require('../assets/images/TechBlog.png'),
        description: 'ChatGPT to interpret dreams',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'image alt text here',
        repo: 'https://github.com/Cjmoye30/Dream_Catcher',
        site: 'https://protected-hamlet-16560.herokuapp.com/',
    },
    {
        title: 'RecipeHub',
        imageURL: require('../assets/images/RecipeHub.png'),
        description: 'ChatGPT to interpret dreams',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'image alt text here',
        repo: 'https://github.com/Cjmoye30/Dream_Catcher',
        site: 'https://protected-hamlet-16560.herokuapp.com/',
    },
    {
        title: 'Simon Game',
        imageURL: require('../assets/images/SimonGame.png'),
        description: 'ChatGPT to interpret dreams',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'image alt text here',
        repo: 'https://github.com/Cjmoye30/Dream_Catcher',
        site: 'https://protected-hamlet-16560.herokuapp.com/',
    },
    {
        title: 'Coding Quiz',
        imageURL: require('../assets/images/CodingQuiz.png'),
        description: 'ChatGPT to interpret dreams',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'image alt text here',
        repo: 'https://github.com/Cjmoye30/Dream_Catcher',
        site: 'https://protected-hamlet-16560.herokuapp.com/',
    },
    {
        title: 'Personal Portfolio',
        imageURL: require('../assets/images/Portfolio.png'),
        description: 'ChatGPT to interpret dreams',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'image alt text here',
        repo: 'https://github.com/Cjmoye30/Dream_Catcher',
        site: 'https://protected-hamlet-16560.herokuapp.com/',
    },
];

export default projects;