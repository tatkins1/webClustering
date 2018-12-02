import { Component, OnInit } from '@angular/core';
import {WebclusterService} from '../services/webcluster.service';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
	headers:String[];
  constructor(private wcs:WebclusterService) { 
  }
  ngOnInit() {
  	 this.headers=this.wcs.getHeaders();

  }

}
