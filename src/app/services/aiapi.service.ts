import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class AIApiService {

    private apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${environment.geminiKey}`;

    constructor(private http: HttpClient) { }

    generateContent(prompt: string): Observable<any> {
      const payload = {
        contents: [{
          parts: [{ text: prompt }]
        }]
      };
      return this.http.post<any>(this.apiUrl, payload);
    }

  }
