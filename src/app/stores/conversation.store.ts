import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { ConversationService } from '../services/conversation.service';
import { tapResponse } from '@ngrx/operators';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
type ConversationState = {
  question: string;
  preprompt: string;
  answer: string;
  isLoading: boolean;
}
const initialState: ConversationState = {
  question: '',
  preprompt: '',
  answer: '',
  isLoading: false,
}
export const ConversationStore = signalStore({ providedIn: 'root' },
  withState<ConversationState>(initialState),
  withMethods((store, conversationService = inject(ConversationService)) => ({
    fetchAnswer: rxMethod(
      pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return conversationService.fetchAnswer().pipe(
            tapResponse({
              next: (answer) => patchState(store, { answer, isLoading: false }),
              error: (err) => {
                patchState(store, { isLoading: false });
                console.error(err);
              }
            })
          )
        })
      )
    )
  })
  ))
