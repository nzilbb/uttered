import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-transcripts',
  templateUrl: './transcripts.component.html',
  styleUrls: ['./transcripts.component.css']
})
export class TranscriptsComponent implements OnInit {

    transcripts: string[];
    server: ServerService;
    
    constructor(
        messages: MessageService,
        server: ServerService) {
        this.server = server;
        this.transcripts = [];
    }
    
    ngOnInit(): void {
        this.server.listTranscripts().subscribe((transcripts)=>{
            this.transcripts = transcripts;
        });
    }

}
