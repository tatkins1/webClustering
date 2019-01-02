import { Injectable } from '@angular/core';
import {WebCluster} from '../classes/WebCluster.js';
import * as PCA from 'ml-pca';

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
  getNormalizedData(){
    return this.webCluster.normalizedData;
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
  getClusters(){
    return this.webCluster.clusters;
  }
  pcaTest(dataSet){
    let pca = new PCA(dataSet);
    console.log("explained variance");
    console.log(pca.getExplainedVariance());
  }
  cluster(numclusters:number,alpha:number, beta:number, maxIterations:number){
    this.webCluster.runKmeans(numclusters,alpha,beta,maxIterations); 
  }
}
