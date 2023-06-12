// this file will store all of my projects which will then get pulled into the Projects component - meaning that I define all of the project fields in this file which will then dynamically be rendered on the projects page after I import this file


const projects = [
    {
        title: 'DreamerGPT',
        imageURL: require('../assets/images/DreamerGPT.png'),
        description: 'ChatGPT to interpret dreams',
        languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
        altText: 'image alt text here',
        repo: 'https://github.com/Cjmoye30/Dream_Catcher',
        site: 'https://protected-hamlet-16560.herokuapp.com/',
        main: "main-project"
    },
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
    // {
    //     title: 'RecipeHub',
    //     description: 'Get or search for a recipe',
    //     languages: 'JavaScript, HTML, CSS, Bulma',
    //     altText: 'image alt text here',
    //     repo: 'https://github.com/Cjmoye30/Recipe_Hub',
    //     site: 'https://cjmoye30.github.io/Recipe_Hub/'
    // },
    // {
    //     title: 'TechBlog',
    //     description: 'Login or Signup to create, comment, and view tech related blogposts',
    //     languages: 'ExpressJS, Sequelize, JQuery, HandlebarsJS',
    //     imageURL:'tbd',
    //     altText: 'image alt text here',
    //     repo: 'https://github.com/Cjmoye30/TechBlog',
    //     site: 'https://peaceful-oasis-37638.herokuapp.com/'
    // },
    // {
    //     title: 'Simon Game',
    //     description: 'User attempts to remember a randomly genereated sequence with increasing difficulty',
    //     languages: 'JavaScript, HTML, CSS',
    //     imageURL:'tbd',
    //     altText: 'image alt text here',
    //     repo: 'https://github.com/Cjmoye30/Simon_Game',
    //     site: 'https://cjmoye30.github.io/Simon_Game/'
    // },
    // {
    //     title: 'Coding Quiz',
    //     description: 'Series of 10 coding related questions with a time limit',
    //     languages: 'JavaScript, HTML, CSS',
    //     imageURL:'tbd',
    //     altText: 'image alt text here',
    //     repo: 'https://github.com/Cjmoye30/Coding_Quiz',
    //     site: 'https://cjmoye30.github.io/Coding_Quiz/'
    // },
    // {
    //     title: 'Personal Portfolio',
    //     description: 'Personal portfolio to showcase my latest work.',
    //     languages: 'JavaScript, HTML, CSS, Bootstrap',
    //     imageURL:'tbd',
    //     altText: 'image alt text here',
    //     repo: 'https://github.com/Cjmoye30/Personal_Portfolio',
    //     site: 'https://cjmoye30.github.io/Personal_Portfolio/'
    // }
];

export default projects;