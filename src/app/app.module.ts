import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-highcharts'; 
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;
export function highchartsFactory() {

    var hc = require('highcharts');
    var hcm = require('highcharts/highcharts-more');
    var sg = require('highcharts/modules/solid-gauge');

    hcm(hc);
    sg(hc);
    
    return hc;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [ {provide: HighchartsStatic,useFactory: highchartsFactory}],
  bootstrap: [AppComponent]
})
export class AppModule { }
