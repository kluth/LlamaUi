import { Component, effect, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ConversationStore } from '../../stores/conversation.store';
import { getState } from '@ngrx/signals';


@Component({
  selector: 'app-question-input',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './question-input.component.html',
  styleUrl: './question-input.component.scss'
})
export class QuestionInputComponent {
  readonly conversationStore = inject(ConversationStore);

  constructor() {
    effect(() => {
      const state = getState(this.conversationStore);
      console.log('Store changed', state);
    });
  }
}
