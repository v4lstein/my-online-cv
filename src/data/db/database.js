import Mock from "../mock";

const database = {
  information: {
    name: "Valentin Cuteanu",
    aboutContent:
      "I am a web developer and guitar player from Cluj-Napoca, Romania. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
    age: 25,
    phone: "+0770636805",
    nationality: "Romanian",
    language: "Romanian, English",
    email: "valentin.cuteanu@gmail.com",
    address: "Cluj-Napoca",
    freelanceStatus: "Available",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    brandImage:
      "https://tctechcrunch2011.files.wordpress.com/2013/01/github-logo.png?w=300&h=300",
    aboutImage: "",
    aboutImageLg: "",
    cvfile: ""
  }
};

Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});
