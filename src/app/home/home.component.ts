import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly-basic.js';

interface trace{
	x:number[];
	y:number[];
	mode:String;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	@ViewChild('chart') el: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  something(){
 

  }


}

