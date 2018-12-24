import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLoaderComponent } from './my-loader/my-loader.component';
import { HomeComponent } from './home/home.component';
import { HeadersComponent } from './headers/headers.component';
import { InsertDataComponent } from './insert-data/insert-data.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule }   from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { ClusterConfigComponent } from './cluster-config/cluster-config.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLoaderComponent,
    HomeComponent,
    HeadersComponent,
    InsertDataComponent,
    WelcomeComponent,
    ClusterConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
