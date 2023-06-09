import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    messages: string[] = [];
    errors: string[] = [];
    
    constructor() { }
    
    info(message: string): void {
        this.messages.push(message);
        setTimeout(()=>{ this.messages.shift(); }, 15000); // TODO find a better way
    }
    
    error(message: string): void {
        this.errors.push(message);
        setTimeout(()=>{ this.errors.shift(); }, 15000); // TODO find a better way
    }
}
