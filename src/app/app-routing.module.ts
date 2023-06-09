import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranscriptsComponent } from './transcripts/transcripts.component';
import { AboutComponent } from './about/about.component';
import { TranscriptComponent } from './transcript/transcript.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'transcript/:transcriptId', component: TranscriptComponent },
    { path: '**', component: TranscriptsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
