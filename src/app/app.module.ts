import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RouterModule, Routes } from '@angular/router';

import {AJAXService} from './ajax.service';


import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

const appRoutes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'tracks', component: TracksComponent },
  { path: '', component: TracksComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    ArtistsComponent,
    AlbumsComponent,
    NotfoundComponent,
    TopnavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AJAXService],
  bootstrap: [AppComponent]
})
export class AppModule { }
