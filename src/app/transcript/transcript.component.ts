import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from '../message.service';
import { ServerService } from '../server.service';
import { Transcript } from '../transcript';
import { Utterance } from '../utterance';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {

    server: ServerService;
    transcriptId: string;
    transcript: Transcript | null;
    utterance: Utterance | null;
    @ViewChild("media") media: ElementRef | null;
    audio: any | null;
    stopAfter: number | null;
    
    constructor(
        messages: MessageService,
        server: ServerService,
        private route: ActivatedRoute
    ) {
        this.server = server;
        this.transcriptId = "";
        this.transcript = null;
        this.utterance = null;
        this.media = null;
        this.audio = null;
        this.stopAfter = null;
    }
    
    ngOnInit(): void {
        this.transcriptId = ""+this.route.snapshot.paramMap.get('transcriptId');
        this.server.getTranscript(this.transcriptId).subscribe((transcript : Transcript)=>{
            this.transcript = transcript;
        });
    }

    currentUtterance(utterance: Utterance): void {
        this.utterance = utterance;
        this.play(utterance.start, utterance.end);        
    }

    @HostListener('document:keydown', ['$event'])
    keyDown(event: KeyboardEvent) {
        if (event.ctrlKey && event.key == "p") { // <Ctrl><p> is play/pause
            if (this.media && this.audio) {
                if (this.audio.paused) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
                return false;
            }
        }
        // TODO on enter, save utterance
        return true;
    }

    play(fromTime: number, toTime: number): void {
        if (this.media) {
            this.audio = this.media.nativeElement;
            this.audio.addEventListener("timeupdate", (event:any)=>{this.onTimeUpdate(event)});
            this.audio.currentTime = fromTime;
            this.stopAfter = toTime;
            this.audio.play();
        }
    }
    onTimeUpdate(event: any): void {
        if (this.stopAfter && this.audio) {
            if (this.audio.currentTime > this.stopAfter) {
                this.audio.pause();
                this.stopAfter = null;
            }
        }
    }
    
}
