import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly-basic.js';
import * as PCA from 'ml-pca';
import {WebclusterService} from '../services/webcluster.service';

@Component({
  selector: 'app-cluster-plot',
  templateUrl: './cluster-plot.component.html',
  styleUrls: ['./cluster-plot.component.css']
})
export class ClusterPlotComponent implements OnInit {
	@ViewChild('chart') el: ElementRef;
  constructor(private wcs:WebclusterService) { }

  ngOnInit() {
  }
basicChart(){
	const element = this.el.nativeElement;

	const data =[{
		x: [1,2,3,4,5],
		y: [2,4,8,16,32],
		mode:"markers"

	},
	{
		x: [5,2,3,9,3],
		y: [2,0,8,16,1],
		mode:"markers"
	}]
	const style ={
		margin: {t:0}
	}
	console.log(Object.keys(Plotly));
	Plotly.newPlot(element, data, style);
}
plotClusters(){
	const element = this.el.nativeElement;

//transformto2D
let pca = new PCA(this.wcs.getNormalizedData());
let clusters = this.wcs.getClusters();
let data = clusters.map((cluster)=>{
return pca.predict(cluster);
}).map((cluster)=>{
	return toChartData(cluster);
});
const style ={
		margin: {t:0}
	}
		Plotly.newPlot(element, data, style);

}
}
function toChartData(pcaArray){
let X=[];
let Y=[];
pcaArray.forEach((o)=>{
X.push(o[0]);
Y.push(o[1]);
});

return {
	x:X,
	y:Y,
	mode:"markers"
}
}
