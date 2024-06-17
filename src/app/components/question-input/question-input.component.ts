import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-question-input',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './question-input.component.html',
  styleUrl: './question-input.component.scss'
})
export class QuestionInputComponent {

}
