import Mock from "../mock";

const database = {
  information: {
    name: "Valentin",
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
    aboutImage: "",
    aboutImageLg: "",
    cvfile: ""
  },
  contactInfo: {
    phoneNumbers: ["+40770636805"],
    emailAddress: ["valentin.cuteanu@gmail.com"],
    address: "Cluj-Napoca, Romania"
  }
};

Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
