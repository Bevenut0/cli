
import { EChoicesBoilerPlates } from "./enum/choices-boilerplate.enum";
import { EErros } from "./enum/erros.enum";
import { EGitName } from "./enum/git-name.enum";
import path from "node:path";
import fs from "node:fs";

// Pergunta a linguagem no console
export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Deseja qual base do projeto?',
    choices: [
      EChoicesBoilerPlates.NODEJS_TS,
      EChoicesBoilerPlates.REACT_TS,
      EChoicesBoilerPlates.REACT_JS,
      EChoicesBoilerPlates.SCSS
    ],
  },
  //Pergunta o nome da pasta do Projeto
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual vai ser o nome do projeto?',
    // Validação do nome
    validate(folderName : string){
        if(!folderName) return EErros.ERROR_NULL ; //Verifica se tem um nome

        //Verifica se possui caracteres especiais
        if(/[^\w\s-]/.test(folderName)) return EErros.ERROR_INVALID_NAME; 

        if (folderName === EGitName.NODEJS_TS || folderName === EGitName.SCSS)
          return EErros.ERROR_GIT_NAME;

        try{ // Tenta ver se possui outras pastas com o mesmo nome
            const dir = path.resolve(folderName);
            fs.accessSync(dir, fs.constants.R_OK);
            return EErros.ERROR_INVALID_FOLDER
            
        } catch(erro) {}

        return(true);
    }
  },
];