import { Component, OnInit } from '@angular/core';
import {WebclusterService} from '../services/webcluster.service';



interface ColumnHeader{
  name:String;
  type:String;
  weight:Number;
}
@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {
	matrix:any[]=[];
  constructor(private wcs:WebclusterService ) { }

  ngOnInit() {
  }
  submit(value:String){
  	console.log("clicked");
  	console.log(value);
  	this.saveMatrix(value);
  	}
  saveMatrix(str:String){
  	let matrix:any[]=str.split('\n');
  	matrix=matrix.map((a)=>{
  		return a.split(',');
  	});
  	this.matrix=matrix;
    this.wcs.setData(this.matrix);
    this.addHeaders();
  }
  addHeaders(){
    console.log(this.matrix[0]);
  	 this.wcs.setHeaders(this.matrix[0]);
  }
  }

