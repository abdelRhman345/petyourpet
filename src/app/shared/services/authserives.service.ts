import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthserivesService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(`${env.baseUrl}/users`);
  }
}
