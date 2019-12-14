import Mock from "../mock";

const database = {
  information: {
    name: "Valentin-Flaviu Cuteanu",
    aboutContent: "Software Developer -- Cluj-Napoca, Romania",
    age: 25,
    phone: "+40770636805",
    nationality: "Romanian",
    language: "Romanian, English",
    email: "valentin.cuteanu@gmail.com",
    address: "Cluj-Napoca",
    freelanceStatus: "Available",
    socialLinks: {
      linkedin: "https://linkedin.com/in/valentin-cuteanu",
      github: "https://github.com/v4lstein"
    },
    brandImage:
      "https://tctechcrunch2011.files.wordpress.com/2013/01/github-logo.png?w=300&h=300",
    aboutImage: "./img/about.jpg",
    cvfile: "./files/no-cv-yet.txt"
  },
  contactInfo: {
    phoneNumbers: ["+40770636805"],
    emailAddress: ["valentin.cuteanu@gmail.com"],
    address: "Cluj-Napoca, Romania"
  },
  services: [
    {
      title: "Web Development",
      icon: "code",
      details:
        "Using the latest web technologies, I can build webapps for any purpose the client might desire."
    },
    {
      title: "Automation",
      icon: "play",
      details:
        "Repetitive tasks can ruin anyone's day. Why not let a computer do them for you?"
    },
    {
      title: "Network Administration",
      icon: "network",
      details:
        "With a good knowledge of the TCP/IP suite, any problem the client might have, can be solved easily."
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 80
    },
    {
      title: "CSS3 / SCSS",
      value: 70
    },
    {
      title: "Javascript",
      value: 80
    },
    {
      title: "Python",
      value: 70
    },
    {
      title: "ReactJS",
      value: 65
    },
    {
      title: "TCP / IP",
      value: 65
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "IT Specialist",
        company: "Instinct Imserv"
      },
      {
        id: 2,
        year: "2012 - Present",
        position: "Guitar Player",
        company: "Self-employed"
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2019",
        graduation: "Front-end Development",
        university: "The Informal School of IT"
      },
      {
        id: 2,
        year: "2008 - 2012",
        graduation: "High School Graduation",
        university: 'Liceul de Arta "Aurel Popp"'
      }
    ]
  },
  portfolio: [
    {
      id: 1,
      title: "MyIMDB",
      subtitle: "A group project with many backend interactions",
      imageUrl: "./img/imdb.png",
      live: "https://crinel.github.io/myIMDB-10.1/",
      github: "https://github.com/crinel/myIMDB-10.1"
    },
    {
      id: 2,
      title: "The Mover",
      subtitle: "Cool little browser game",
      imageUrl: "./img/mover.png",
      live: "https://v4lstein.github.io/the-mover",
      github: "https://github.com/v4lstein/the-mover"
    },
    {
      id: 3,
      title: "Agenda App",
      subtitle: "A simple app with CRUD operations",
      imageUrl: "./img/agenda.png",
      live: "https://v4lstein.github.io/AgendaApp/",
      github: "https://github.com/v4lstein/AgendaApp"
    },
    {
      id: 4,
      title: "IMDB Extras",
      subtitle: "Small ExpressJS REST API for getting some data from IMDB",
      imageUrl: "./img/node.jpg",
      github: "https://github.com/v4lstein/imdb-extras"
    },
    {
      id: 5,
      title: "SubMe",
      subtitle: "An under construction subtitle generator app",
      imageUrl: "./img/node.jpg",
      github: "https://github.com/vladgrecu/Subme"
    },
    {
      id: 6,
      title: "BitLuck",
      subtitle: "A client-side version of the now defunct directory.io website",
      imageUrl: "./img/bitluck.png",
      github: "https://github.com/v4lstein/BitLuck",
      live: "https://v4lstein.github.io/BitLuck/"
    }
  ]
};

Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/portfolio").reply(config => {
  const response = database.portfolio;
  return [200, response];
});
