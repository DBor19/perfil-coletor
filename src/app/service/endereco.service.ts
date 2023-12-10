import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Endereco } from '../Model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private baseUrl = "http://localhost:3000/endereco";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {

  }

  getEndereco(): Observable<Endereco> {
    return this.http.get<Endereco>(this.baseUrl, this.httpOptions).pipe(
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
