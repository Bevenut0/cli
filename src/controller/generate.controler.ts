//Imports
import path from 'node:path';
import fs from 'node:fs';

import shelljs from 'shelljs';
import { EChoicesBoilerPlates } from '../enum/choices-boilerplate.enum';
import { EGitName } from '../enum/git-name.enum';
import { IAnswers } from '../interface/answers.interface';

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerPlates.NODEJS_TS:
          this._execpath(EGitName.NODEJS_TS, answers.folderName);
          break;

        case EChoicesBoilerPlates.REACT_TS:
        this._execpath(EGitName.REACT_TS, answers.folderName);
        break;

        case EChoicesBoilerPlates.SCSS:
          this._execpath(EGitName.SCSS, answers.folderName);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  private _execpath(gitName: string, folderName: string) {
    try {
      shelljs.cd(path.resolve());
      shelljs.exec(`git clone git@github.com:Bevenut0/${gitName}.git`);
      //https://github.com/Bevenut0/BoilerPlate-Typescript-Node-Js.git
      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`,
      );

      console.log('Arquivo criado com sucesso!');
      return shelljs.exit;

    } catch (error) {
      console.log(error);
    }
  }
}

export const GenFile = new GenerateController();
