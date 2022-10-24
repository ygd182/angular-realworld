import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'https://api.realworld.io/api/';

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return  throwError(() => error.error);
  }

  get(path: string,  params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.api}${path}`, {params}).pipe(catchError(this.formatErrors));
  }

  post(path: string,  body = {}): Observable<any> {
    return this.http.post(`${this.api}${path}`, body).pipe(catchError(this.formatErrors));
  }

  put(path: string,  body = {}): Observable<any> {
    return this.http.put(`${this.api}${path}`,  body).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${this.api}${path}`).pipe(catchError(this.formatErrors));
  }

}
