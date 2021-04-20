import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material/material-module';
import { HomeComponent } from './home/home.component';
import { SearchDevsComponent } from './search-devs/search-devs.component';
import { devs } from './model/devs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchDevsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  devs
 }
