import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PianoComponent } from './piano/piano.component';
import { OctaveComponent } from './octave/octave.component';
import { KeyComponent } from './key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    NavbarComponent,
    FooterComponent,
    PianoComponent,
    OctaveComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
