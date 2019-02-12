import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistcomponentComponent } from './postlistcomponent/postlistcomponent.component';
import { PostlistitemcomponentComponent } from './postlistitemcomponent/postlistitemcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    PostlistcomponentComponent,
    PostlistitemcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
