import storefront from "../../images/storefrontreact.png";
import harmony from "../../images/harmony.png";
import mattress from "../../images/mattress.png";
import rainshine from "../../images/rain-shine.png";
import burger from "../../images/build-a-burger.png";
import codequiz from "../../images/code-quiz.png";
import planner from "../../images/daily-planner.png";
import episorder from "../../images/episorder.png";
import todolist from "../../images/todolist.png";
import bookTracker from "../../images/book-tracker.png";
import tvtracker from "../../images/tvtracker.png";

const projects = [
    {
        name: "TV Tracker",
        deployed: "https://dj-tv-tracker.netlify.app/",
        image: tvtracker,
        repo: "https://github.com/DJ620/TV-Tracker",
        description: "This is a mobile-responsive React web application I built that allows users to track the TV shows they watch. It utilizes the TV Maze API to gather information on any show a user chooses, and keeps track of what episodes have and have not been watched. Once a show is in a user's Library, it automatically lets them know if they have a new episode available for the show, if it is up to date, or if the user has not started watching the show. You can create your own account, or use the demo account (username: demo, password: demo123)",
        tech: ["React", "Redux", "Express", "MongoDB", "Mongoose", "Axios", "Passport", "JSONwebtoken", "React-Bootstrap"]
    },
    {
        name: "Reading Tracker",
        deployed: "https://dj-reading-tracker.netlify.app",
        image: bookTracker,
        repo: "https://github.com/DJ620/Reading-Tracker",
        description: "This is an application I built to track reading progress. It uses the Google Books API to grab the data of any book, and allows you to log all of your reading sessions, including how much of the book you read, how long you read for, any quotes you want to jot down, and you can add your own notes.",
        tech: ["React", "Express", "MongoDB", "Mongoose", "JSONWebtoken", "React-Bootstrap", "Google Books API", "Axios", "Passport"]
    },
    // {
    //     name: "Store Front",
    //     deployed: "https://storefrontreact.herokuapp.com/",
    //     image: storefront,
    //     repo: "https://github.com/DJ620/store-front-react",
    //     description: "Collaborated with a team of 4 other developers to build this React web application that allows store owners to create a fully-customized online store with a user-friendly interface. My contribution to this project was writing all of the back-end code to create the server and database, as well as implementing redux into the react code.",
    //     tech: ["React", "Redux", "Redux-Persist", "Express", "MySQL", "Sequelize", "Cloudinary", "Axios", "Passport", "JSONwebtoken", "Bootstrap"]
    // },
    // {
    //     name: "HARMøny",
    //     deployed: "https://harmonythegame.herokuapp.com/",
    //     image: harmony,
    //     repo: "https://github.com/TChristensenDrumz/HARMony",
    //     description: "Collaborated with a team of 4 other developers to build this browser-based, music-themed, roguelike game. My contribution to this project was building the back-end code, creating the server and database, writing the user authentication, and building the code for level transitions.",
    //     tech: ["React", "Express", "MongoDB", "Mongoose", "JSONwebtoken", "Canvas", "Passport", "Axios"]
    // },
    {
        name: "Sell More Mattresses",
        deployed: "https://dj620.github.io/sell-more-mattresses/",
        image: mattress,
        repo: "https://github.com/DJ620/sell-more-mattresses",
        description: "This is a mobile-responsive webpage built for the company 'Sell More Mattresses'. I sought out the opportunity to work on a real world website for an existing business, and partnered with a web designer to create the page. The designer provided me with a wireframe, which I used to then build the actual site.",
        tech: ["Bootstrap", "EmailJS", "Twitter API"]
    },
    {
        name: "RainShine",
        deployed: "https://dj620.github.io/rain-shine/",
        image: rainshine,
        repo: "https://github.com/DJ620/rain-shine",
        description: "This is a weather application that allows a user to get the current weather conditions, as well as a 5-day forecast for any city. Each city searched will be saved to the page, or can be removed by clicking the delete button.",
        tech: ["OpenWeather API", "jQuery", "Bootstrap"]
    },
    // {
    //     name: "Build-A-Burger",
    //     deployed: "https://blooming-plains-91984.herokuapp.com/",
    //     image: burger,
    //     repo: "https://github.com/DJ620/build-a-burger",
    //     description: "This is a restaurant application that emulates the experience of building and then devouring a burger. It was created using the MVC paradigm.",
    //     tech: ["Express", "Express Handlebars", "MySQL", "jQuery", "Bootstrap"]
    // },
    {
        name: "Code Quiz",
        deployed: "https://dj620.github.io/code-quiz/",
        image: codequiz,
        repo: "https://github.com/DJ620/code-quiz",
        description: "This is a multiple choice coding quiz I built early in my coding bootcamp. You have 1 minute to answer as many multiple choice questions as you can, and get the chance to add your score to the high-score board.",
        tech: ["Vanilla JavaScript", "Bootstrap"]
    },
    {
        name: "Daily Planner",
        deployed: "https://dj620.github.io/plan-your-day-efficiently/",
        image: planner,
        repo: "https://github.com/DJ620/plan-your-day-efficiently",
        description: "This is a daily planner application. It displays normal working hours, with a color-code showing the current hour of the day. Users can create and delete daily events or tasks into any hour block.",
        tech: ["Moments.js", "jQuery", "Bootstrap"]
    },
    {
        name: "Episorder",
        deployed: "https://dj620.github.io/episorder/",
        image: episorder,
        repo: "https://github.com/DJ620/episorder",
        description: "This is a web application that allows users to choose any number of tv shows, and sort their episodes based on air date. I created this app so that fans of franchise's such as CW's super hero shows can easily figure out what order to watch episodes while staying on the correct timeline.",
        tech: ["EpisoDate API", "Bootstrap", "jQuery"]
    },
    {
        name: "React To Do List",
        deployed: "https://dj620.github.io/1hour-to-do-list/",
        image: todolist,
        repo: "https://github.com/DJ620/1hour-to-do-list",
        description: "This is a simple to do list application I created to practice my skills in React. It can handle full CRUD (Create, Read, Update, Delete) functionality, and was built to be mobile-responsive.",
        tech: ["React", "Local Storage", "Bootstrap"]
    }
];

export default projects;