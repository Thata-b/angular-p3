import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThaishomeComponent } from './thaishome/thaishome.component';
import { ThaislistComponent } from './thaislist/thaislist.component';
import { ThaislistService } from './thaislist.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path:'', component: ThaishomeComponent },
    { path: 'list', component: ThaislistComponent }
  ]) ],
  declarations: [ AppComponent, HelloComponent, ThaishomeComponent, ThaislistComponent ],
  providers: [ ThaislistService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
