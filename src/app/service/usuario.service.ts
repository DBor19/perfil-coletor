import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from 'src//app/Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = "http://localhost:3000/usuarios";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl, this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
