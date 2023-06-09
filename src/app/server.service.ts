import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Transcript } from './transcript';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

    url: string;

    constructor(
        private messageService: MessageService,
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) {
        this.url = this.environment.url;
        console.log("Server: " + this.url);
    }

    listTranscripts(): Observable<string[]> {
        return this.http.get<string[]>(this.url, {observe:"body"});
    }
    
    getTranscript(transcriptId: string): Observable<Transcript> {
        return this.http.get<Transcript>(`${this.url}/${transcriptId}`, {observe:"body"});
    }
}
