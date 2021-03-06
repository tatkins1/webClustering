import { Component, OnInit } from '@angular/core';
import {WebclusterService} from '../services/webcluster.service';
@Component({
  selector: 'app-cluster-config',
  templateUrl: './cluster-config.component.html',
  styleUrls: ['./cluster-config.component.css']
})
export class ClusterConfigComponent implements OnInit {
	numClusters:number;
	algorithm:String;
  constructor(private wcs:WebclusterService) { }

  ngOnInit() {
  }
  cluster(){
  	if(!(this.numClusters&&this.algorithm)){
  		this.numClusters=4;
  		this.algorithm="KMEANS";
  	}
    console.log(this.wcs.getData());
    console.log(this.wcs.getDataType());
    this.wcs.webCluster.normalizeDataSet(this.wcs.getData(),this.wcs.getDataType());
    this.wcs.pcaTest(this.wcs.webCluster.normalizedData);
    console.log(`normalized data : = ${this.wcs.webCluster.normalizedData}`);
  	this.wcs.cluster(this.numClusters, 1,1,100);
  }

}

