import { Component, effect, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConversationStore } from '../../stores/conversation.store';
import { getState } from '@ngrx/signals';
import { FormControl, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-question-input',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './question-input.component.html',
  styleUrl: './question-input.component.scss'
})
export class QuestionInputComponent {
  readonly conversationStore = inject(ConversationStore);
  #fb = inject(FormBuilder);
  fgroup: FormGroup;

  constructor() {
    this.fgroup = this.#fb.group({
      question: new FormControl()
    });
    effect(() => {
      const state = getState(this.conversationStore);
      this.conversationStore.fetchAnswer('test');
      console.log('Store changed', state);
    });
  }
}
