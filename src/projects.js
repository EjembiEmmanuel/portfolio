import cvBuilderImg from "./assets/img/cv-builder.png";
import memoryGameImg from "./assets/img/memory-game.png";
import jieVenturesImg from "./assets/img/jie-ventures.png";
import weatherAppImg from "./assets/img/weather-app.png";
import todoListImg from "./assets/img/todo-list.png";

const projects = [
  {
    img: cvBuilderImg,
    title: "CV BUIILDER",
    desc: "CV Builder is an open-soure application that helps create basic resumes for users. It allows users to enter their details as well as customize the look and feel of their resume by changing the format, colors, and fonts.",
    tools: "Vite, React, JavaScript, HTML and CSS",
    links: {
      site: "https://oche-cv-builder.netlify.app/",
      github: "https://github.com/EjembiEmmanuel/cv-application.git",
    },
  },
  {
    img: memoryGameImg,
    title: "MEMEORY GAME",
    desc: "Memory Game is a fun way of exercising your memory. It is played by clicking on the cards that appear on the screen each round. The game is lost when you click on the same card twice. Have fun!",
    tools: "Vite, React, JavaScript, HTML and CSS",
    links: {
      site: "https://oche-memory-card.netlify.app/",
      github: "https://github.com/EjembiEmmanuel/memory-card.git",
    },
  },
  {
    img: jieVenturesImg,
    title: "JIE VENTURES",
    desc: "This website was built for JIE Ventures, LLC.",
    tools: "Django, JavaScript, HTML and CSS",
    links: {
      site: "https://www.jieventures.com/",
    },
  },
  {
    img: weatherAppImg,
    title: "WEATHER APP",
    desc: "This is an open-source weather application that fetches weather data of a particular location from an API and displays it in hourly and daily forecasts.",
    tools: "Webpack, WeatherApi, JavaScript, HTML and CSS",
    links: {
      site: "https://ejembiemmanuel.github.io/weather-app/",
      github: "https://github.com/EjembiEmmanuel/weather-app.git",
    },
  },
  {
    img: todoListImg,
    title: "TODO LIST",
    desc: "This is an open-source todo list application that helps keep track of tasks. Users can add tasks, schedule tasks, mark tasks as complete, organize tasks into individual lists etc.",
    tools: "Webpack, JavaScript, HTML and CSS",
    links: {
      site: "https://ejembiemmanuel.github.io/todo-list/",
      github: "https://github.com/EjembiEmmanuel/todo-list.git",
    },
  },
];

export default projects;
