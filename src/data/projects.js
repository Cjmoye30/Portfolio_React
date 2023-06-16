// this file will store all of my projects which will then get pulled into the Projects component - meaning that I define all of the project fields in this file which will then dynamically be rendered on the projects page after I import this file

// Can I single out my first project out of all my other items in the array?
// main project/centerpiece should always be at index 0

const projects = [
    // ------------ Main project ------------
    {
        title: 'DreamerGPT',
        imageURL: require('../assets/images/DreamerGPT.png'),
        description: 'Interpret and log dreams with ChatGPT Open AI',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'space background',
        repo: 'https://github.com/Cjmoye30/Dream_Catcher',
        site: 'https://protected-hamlet-16560.herokuapp.com/',
    },

    // ------------ Other projects ------------
    {
        title: 'TechBlog',
        imageURL: require('../assets/images/TechBlog.png'),
        description: 'Create, read, and comment on tech related blogposts',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'blogpost with wire background',
        repo: 'https://github.com/Cjmoye30/TechBlog',
        site: 'https://peaceful-oasis-37638.herokuapp.com/',
    },
    {
        title: 'RecipeHub',
        imageURL: require('../assets/images/RecipeHub.png'),
        description: 'Search or get a random recipe along with a local Charlotte grocery store',
        languages: 'Javascript, HTML, CSS, Bulma, JQuery',
        altText: 'table of food',
        repo: 'https://github.com/Cjmoye30/Recipe_Hub',
        site: 'https://cjmoye30.github.io/Recipe_Hub/',
    },
    {
        title: 'Simon Game',
        imageURL: require('../assets/images/SimonGame.png'),
        description: 'Users attempt to remember a randomly generated patter with increased difficulty',
        languages: 'Javascript, HTML, CSS, Bootstrap',
        altText: 'simon game board',
        repo: 'https://github.com/Cjmoye30/Simon_Game',
        site: 'https://cjmoye30.github.io/Simon_Game/',
    },
    {
        title: 'Coding Quiz',
        imageURL: require('../assets/images/CodingQuiz.png'),
        description: 'Series of 10 coding related questions with a time limit',
        languages: 'Javascript, HTML, CSS',
        altText: 'image alt text here',
        repo: 'https://github.com/Cjmoye30/Coding_Quiz',
        site: 'https://cjmoye30.github.io/Coding_Quiz/',
    },
    {
        title: 'Personal Portfolio',
        imageURL: require('../assets/images/Portfolio.png'),
        description: 'Personal portfolio to showcase my latest work',
        languages: 'Javascript, HTML, CSS, Bootstrap',
        altText: 'portfolio homepage',
        repo: 'https://github.com/Cjmoye30/Personal_Portfolio',
        site: 'https://cjmoye30.github.io/Personal_Portfolio/',
    },
];

export default projects;