import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranscriptsComponent } from './transcripts/transcripts.component';
import { AboutComponent } from './about/about.component';
import { TranscriptComponent } from './transcript/transcript.component';

@NgModule({
  declarations: [
      AppComponent,
      TranscriptsComponent,
      AboutComponent,
      TranscriptComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
  ],
  providers: [{
      provide: 'environment',
      useValue: environment
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
