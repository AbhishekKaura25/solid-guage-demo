import { Component } from '@angular/core';

import { OverallVsSpentModel } from './models/OverallVsSpentModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public overallVsSpentOption = new OverallVsSpentModel(10,7,'#55BF3B', 350);   
}
