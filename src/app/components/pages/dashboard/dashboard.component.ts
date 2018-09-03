import { Component, OnInit } from '@angular/core';
import { single, multi } from '../../../models/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
