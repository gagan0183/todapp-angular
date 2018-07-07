import ToDo from '../models/todo.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
    apiUrl = 'http://localhost:3000';
    todoUrl = `${this.apiUrl}/api/todos`;

    constructor(
        private http: HttpClient
    ) { }

    createTodo(todo: ToDo): Observable<any> {
        return this.http.post(`${this.todoUrl}`, todo);
    }

    getToDos(): Observable<ToDo[]> {
        return this.http.get(this.todoUrl)
            .map(res => {
                return res["data"].docs as ToDo[];
            });
    }

    editTodo(todo: ToDo) {
        let editUrl = `${this.todoUrl}`;
        return this.http.put(editUrl, todo);
    }

    deleteTodo(id: String): any {
        let deleteUrl = `${this.todoUrl}/${id}`;
        return this.http.delete(deleteUrl);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}