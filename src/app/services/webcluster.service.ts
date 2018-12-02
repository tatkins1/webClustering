import { Injectable } from '@angular/core';
import {WebCluster} from '../classes/WebCluster.js';

@Injectable({
  providedIn: 'root'
})
export class WebclusterService {
	webCluster:WebCluster;
  constructor() { 
	  console.log('INIT');
  	this.webCluster=new WebCluster();
  	console.log(this.webCluster);  }

  setData(dataSet:any[]){
  	this.webCluster.setDataSet(dataSet);
  	console.log('dataset added');
  	console.log(this.webCluster.dataSet);
  }
  setHeaders(headers:String[]){
  	headers.forEach((x)=>{
  		this.webCluster.dataHeaders.push(x);
  	});
  	//this.webCluster.setHeaders(headers);
  }
  getHeaders(){
  	return this.webCluster.dataHeaders;
  }
  getPCA(){

  }
  plotCluster(){

  }
}
