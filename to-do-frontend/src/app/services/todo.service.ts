import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, todo);
  }

  deleteTodoById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
