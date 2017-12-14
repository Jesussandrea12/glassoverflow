import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  question: Question = new Question (
    'Esta es una nueva preguntra sobre Android',
    'Miren, tengo una duda con una app que estoy haciendo para Android, Err 404 ENFOUND',
    new Date,
    'devicon-android-plain'
  );
}
