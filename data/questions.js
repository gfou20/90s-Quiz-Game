const nickQuestions = [
  {
    question: "Which character was the brave leader of the Rugrats?",
    answers: {
      a: "Chuckie",
      b: "Angelica",
      c: "Tommy",
      d: "Dill"
    },
    correctAnswer: "Tommy"
  }, 
  {
    question: "What was the name of the dinosaur the Rugrats admired?",
    answers: {
      a: "Rugar",
      b: "Reptar",
      c: "Resgar",
      d: "Repter"
    },
    correctAnswer: "Reptar"
  },
  {  
    question: "Which show focused on the adolescent life of a teen living in Bluffington?",
    answers: {
      a: "Doug",
      b: "Dave",
      c: "My Teenage Robot Life",
      d: "As Told by Ginger"
    },
    correctAnswer: "Doug"
  },  
  {
    question: "Who was the secret love interest of the the main character in Doug?",
    answers: {
      a: "Ginger",
      b: "Skeeter",
      c: "Beebe",
      d: "Patti"
    },
    correctAnswer: "Patti"
  },
  {  
    question: "Which character was known as 'football head'?",
    answers: {
      a: "Gerald",
      b: "Harold",
      c: "Arnold",
      d: "Danny"
    },
    correctAnswer: "Arnold"
  },
  {  
    question: "Which character always made fun of Arnold, but secretly liked him?",
    answers: {
      a: "Helga",
      b: "Helena",
      c: "Phoebe",
      d: "Lila"
    },
    correctAnswer: "Helga"
  },
  {  
    question: "What is the name of the restaurant SpongeBob works at?",
    answers: {
      a: "Chum Bucket",
      b: "Krusty Crab",
      c: "Good Burger",
      d: "Crusty Crab"
    },
    correctAnswer: "Krusty Crab"
  },
  {  
    question: "What is the name of Spongebob’s neighbor who always wants to be left alone?",
    answers: {
      a: "Patrick",
      b: "Gary",
      c: "Squidward",
      d: "Mr.Krabs"
    },
    correctAnswer: "Squidward"
  }  
]

const toonQuestions = [
  {
    question: "What was the accidental ingredient that created the PowerPuff girls?",
    answers: {
      a: "Sugar",
      b: "Spice",
      c: "Chemical Y",
      d: "Chemical X"
    },
    correctAnswer: "Chemical X"
  },
  {  
    question: "Which character used to be friends with Professor Utonium?",
    answers: {
      a: "Miss Bellum",
      b: "Mojo Jojo",
      c: "Princess Morbucks",
      d: "HIM"
    },
    correctAnswer: "Mojo Jojo"
  },
  {  
    question: "Which 'Ed' was the brains in trio Ed, Edd and Eddy?",
    answers: {
      a: "Ed",
      b: "Edd",
      c: "Eddy",
      d: "None of them were smart"
    },
    correctAnswer: "Edd"
  },
  {  
    question: "What was Ed, Edd and Eddy’s favorite candy?",
    answers: {
      a: "Chocolate Bars",
      b: "Jawbreakers",
      c: "Lollipops",
      d: "Gummies"
    },
    correctAnswer: "Jawbreakers"
  },
  {  
    question: "What was the name of Dexter’s annoying sister?",
    answers: {
      a: "Debs",
      b: "Dee Bee",
      c: "Dee Dee",
      d: "Denise"
    },
    correctAnswer: "Dee Dee"
  },
  {  
    question: "Who was Dexter’s biggest rival?",
    answers: {
      a: "Mojo Jojo",
      b: "Mandark",
      c: "Mandork",
      d: "Mandarin"
    },
    correctAnswer: "Mandark"
  },
  {  
    question: "Where did Courage, Muriel and Eustace live?",
    answers: {
      a: "Middle of Nowhere",
      b: "Townsville",
      c: "Dimmsdale",
      d: "Gravity Falls"
    },
    correctAnswer: "Middle of Nowhere"
  },
  {  
    question: "Which of these characters made an appearance in Courage the Cowardly Dog?",
    answers: {
      a: "Le Quack",
      b: "The RowdyRuff Boys",
      c: "Johnny Bravo",
      d: "Finn"
    },
    correctAnswer: "Le Quack"
  }  
]

const disneyQuestions = [
  {
    question: "Where do the Gargoyles wake up after being petrified for a thousand years?",
    answers: {
      a: "Scotland",
      b: "New York City",
      c: "London",
      d: "Los Angeles"
    },
    correctAnswer: "New York City"
  },
  {  
    question: "What was the name of the leader of the Gargoyles?",
    answers: {
      a: "Lexington",
      b: "Xanatos",
      c: "Demona",
      d: "Goliath"
    },
    correctAnswer: "Goliath"
  },
  {  
    question: "What was the favorite quote used to describe the lifestyle philosophy of Timon and Pumbaa?",
    answers: {
      a: "Hakuna Matata",
      b: "Hakulla Matata",
      c: "Laguna Matata",
      d: "Akuma Matata"
    },
    correctAnswer: "Hakuna Matata"
  },
  {  
    question: "What animals were Timon and Pumbaa?",
    answers: {
      a: "Lion Cub and Warthog",
      b: "Meerkat and Warthog",
      c: "Monkey and Meerkat",
      d: "Rabbit and Warthog"
    },
    correctAnswer: "Meerkat and Warthog"
  },
  {  
    question: "What is the name of Aladdin’s best friend?",
    answers: {
      a: "Abu",
      b: "Iago",
      c: "Rajah",
      d: "Jafar"
    },
    correctAnswer: "Abu"
  },
  {  
    question: "Where did Aladdin find the Genie’s lamp?",
    answers: {
      a: "Cave of Wishes",
      b: "Cave of Wonders",
      c: "Cave of Sand",
      d: "Cave of Mystery"
    },
    correctAnswer: "Cave of Wonders"
  },
  {  
    question: "How did Pepper Ann usually show her emotions?",
    answers: {
      a: "Fantasies",
      b: "Loud Outbursts",
      c: "Crying",
      d: "Laughing"
    },
    correctAnswer: "Fantasies"
  },
  {  
    question: "Pepper Ann was the first Disney animated tv series to:",
    answers: {
      a: "discuss serious world issues",
      b: "discuss serious health issues",
      c: "have a female lead protagonist",
      d: "be created by a woman"
    },
    correctAnswer: "be created by a woman"
  }  
]

const randomQuestions = [
  {
    question: "What was the name of Space Ghost’s enemy turned friend?",
    answers: {
      a: "Brak",
      b: "Voldemort",
      c: "Tak",
      d: "Jak"
    },
    correctAnswer: "Brak"
  },
  {  
    question: "Space Ghost went from fighting crime to:",
    answers: {
      a: "flipping burgers",
      b: "a retired drunk",
      c: "commiting crimes",
      d: "a late night talk show host"
    },
    correctAnswer: "a late night talk show host"
  },
  {  
    question: "Which South Park character always comes back after dying?",
    answers: {
      a: "Cartman",
      b: "Kenny",
      c: "Stan",
      d: "Butters"
    },
    correctAnswer: "Kenny"
  },
  {  
    question: "Where does South Park take place?",
    answers: {
      a: "Nevada",
      b: "Colorado",
      c: "Alaska",
      d: "Ohio"
    },
    correctAnswer: "Colorado"
  },
  {  
    question: "Which Family Guy character usually fights Peter 'on sight'?",
    answers: {
      a: "The Evil Monkey",
      b: "Kool Aid Man",
      c: "Seamus",
      d: "Ernie the Giant Chicken"
    },
    correctAnswer: "Ernie the Giant Chicken"
  },
  {  
    question: "Which Family Guy character usually gives a 'Giggity' as perverse behavior?",
    answers: {
      a: "Joe",
      b: "Quagmire",
      c: "Cleveland",
      d: "Peter"
    },
    correctAnswer: "Quagmire"
  },
  {  
    question: "'Bite my shiny metal a**' is a favorite phrase of which Futurama character?",
    answers: {
      a: "Bender",
      b: "Fry",
      c: "Zoidberg",
      d: "Leela"
    },
    correctAnswer: "Bender"
  },
  {  
    question: "What year was Fry in when he was cryogenically frozen?",
    answers: {
      a: "1999",
      b: "2001",
      c: "1998",
      d: "2000"
    },
    correctAnswer: "2000"
  }  
]

export {
  nickQuestions,
  toonQuestions,
  disneyQuestions,
  randomQuestions
}

