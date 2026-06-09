
// Imports
import { IAnswers } from './interface/answers.interface'
import { questions } from './questions';
import { GenFile } from './controller/generate.controler';

import inquirer from 'inquirer';
import cfonts from 'cfonts';

//Classe
class Init {
  constructor() {
    inquirer.prompt(questions).then((answers : IAnswers) => {
      GenFile.gen(answers)
    });
  }
}

//Limpa o console
console.clear();
// Mensagem de Inicio
console.log("Iniciando....")

cfonts.say("Bevenuto", {
  font: "simple3d",
  color: "black"
});

new Init();
