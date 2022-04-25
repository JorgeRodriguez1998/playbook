// Objeto de JS
const repo = {
    name: "weekly_mission_2",
    author: "JorgeRodriguez1998",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10
   }

   //Crear una clase
   class repositorio{
       constructor(name, author, language, stars, forks){
        this.name = name;
        this. author = author;
        this.language = language;
        this.stars = stars;
        this.forks = forks;
       }

       sayHello() {
         return `Hey! Hello, this repo has ${this.stars} stars and ${this.forks} forks`;
       }

   }
   //Instanciar objetos de una clase
   const repo2 = new repositorio("example2", "JorgeRodriguez1998", "Javascript", 10, 15 );
   console.log(repo2.sayHello())
   console.log(repo2);
   

   const repo3 = new repositorio("example3", "JorgeRodriguez1998", "Javascript", 20, 15 );
   console.log(repo3.sayHello())
   console.log(repo3);
