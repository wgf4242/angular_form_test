import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}