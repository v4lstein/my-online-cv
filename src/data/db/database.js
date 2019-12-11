import Mock from "../mock";

const database = {
  information: {
    name: "Valentin-Flaviu Cuteanu",
    aboutContent: "Web Developer -- Cluj-Napoca, Romania",
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
    aboutImage:
      "https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA",
    aboutImageLg:
      "https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA",
    cvfile: ""
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
