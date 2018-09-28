import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { RdvComponent } from './rdv/rdv.component';
import { ObservationComponent } from './observation/observation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    RdvComponent,
    ObservationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    MatTabsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
