import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
//   selector: 'my-app',
  templateUrl: './app.dynamic-form.component.html',
  providers:  [QuestionService]
})
export class AppDynamicFormComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}