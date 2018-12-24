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
  getData(){
    return this.webCluster.dataSet;
  }
  setHeaders(headers:String[]){
  	headers.forEach((x)=>{
  		this.webCluster.dataHeaders.push(x);
  	});
  	//this.webCluster.setHeaders(headers);
  }
  setDataType(datatype:any){
    this.webCluster.setColumnDataType(datatype);
  }
  getDataType(){
    return this.webCluster.columnDataType;
  }
  getHeaders(){
  	return this.webCluster.dataHeaders;
  }
  getPCA(){

  }
  plotCluster(){

  }
  cluster(numclusters:number,alpha:number, beta:number, maxIterations:number){
    this.webCluster.runKmeans(numclusters,alpha,beta,maxIterations); 
  }
}
