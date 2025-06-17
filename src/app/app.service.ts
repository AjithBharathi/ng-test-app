import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, catchError, forkJoin, of, retry, throwError } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number): Observable<User> {
    const params = new HttpParams().set('id', id);
    return this.http.get<User>(this.baseUrl, { params });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }

  patchUser(id: number, data: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${id}`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getWithHeaders(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer dummy-token',
      'Custom-Header': 'value'
    });
    return this.http.get(this.baseUrl, { headers });
  }

  getUsersWithErrorHandling(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Failed to load users'));
      })
    );
  }

  getFullResponse(): Observable<HttpResponse<any>> {
    return this.http.get(this.baseUrl, { observe: 'response' });
  }

  getTextResponse(): Observable<string> {
    return this.http.get('https://httpbin.org/get', { responseType: 'text' });
  }

  getWithRetry(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      retry(3),
      catchError(error => throwError(() => error))
    );
  }

  getCombinedData(): Observable<any> {
    return forkJoin([
      this.http.get(`${this.baseUrl}`),
      this.http.get('https://jsonplaceholder.typicode.com/posts')
    ]);
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('https://httpbin.org/post', formData);
  }

  downloadFile(): Observable<Blob> {
    return this.http.get('https://httpbin.org/image/png', { responseType: 'blob' });
  }
}
