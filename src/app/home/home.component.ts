import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly-basic.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	@ViewChild('chart') el: ElementRef;
  constructor() { }

  ngOnInit() {
  	this.basicChart()
  }
basicChart(){
	const element = this.el.nativeElement;

	const data =[{
		x: [1,2,3,4,5],
		y: [2,4,8,16,32]
	}]
	const style ={
		margin: {t:0}
	}
	console.log(Object.keys(Plotly));
	Plotly.plot(element, data, style);
}
}
