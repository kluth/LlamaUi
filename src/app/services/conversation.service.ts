import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor() { }

  fetchAnswer(): Observable<string> {
    return of('Hello');
  }
}
