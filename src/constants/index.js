import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    siprap
  } from "../assets";
  
  export const navLinks = [
    {
      id: "acerca",
      title: "Acerca",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company_name: "Escuela profesional de Arte – Universidad Nacional del Altiplano",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Noviembre 2021- Febrero 2022",
      points: [
        "Diseñar y desarrollar sistemas para beneficio",
        "Cotización, compra y mantenimiento de un hosting y dominio",
        "Implementar diseño responsivo y proponer nuevas ideas al desarrollo",
        "Participar en reuniones semanales para los diferentes software's",
      ],
    },
    {
      title: "Desarrollador de software",
      company_name: "Grupo Sistemas",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Abril 2022- Agosto 2022",
      points: [
        "Desarrollar sistemas y herramientas con énfasis en el rendimiento y la escalabilidad.",
        "Mantener bases de datos, análisis de requerimientos.",
        "Implementar diseño responsivo y garantizar la compatibilidad.",
        "Participar en reuniones diarias y proporcionar comentarios sobre el proyecto",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "StarCards",
      description:
        "Plataforma web, juego de cartas del videojuego Starcraft en el cuál puedes competir contra otras personas y hablar con ellas, hacer amigos, etc.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Postgressql",
          color: "pink-text-gradient",
        },
        
      ],
      image: 'https://camo.githubusercontent.com/a7644c5e4590aadcd243395857e80c270c2f4acd0b5110954c5293a93d553ebc/68747470733a2f2f692e6962622e636f2f53664b684d67322f53696e2d742d74756c6f2d312d4d6573612d64652d74726162616a6f2d312e706e67',
      source_code_link: "https://github.com/Blacksavior24/starcards",
    },
    {
      name: "Pokemon API",
      description:
        "Aplicación web, del backend consumiendo la api y de ahí el frontend consume la nueva api para filtrarlos por tipo, stats, nombre; puedes crear tu propio pokemon",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Postgressql",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://raw.githubusercontent.com/Blacksavior24/PI-POKEMON/main/pokemon.png',
      source_code_link: "https://github.com/Blacksavior24/PI-POKEMON",
    },
    {
      name: "Siprap",
      description:
        "Sistema de Practicas Preprofesionales de la escuela de arte de la UNAP",
      tags: [
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "Ejs",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: siprap,
      source_code_link: "https://github.com/Blacksavior24/siprap",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };