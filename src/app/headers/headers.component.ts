import { Component, OnInit } from '@angular/core';
import {WebclusterService} from '../services/webcluster.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
	headers:String[];
	headerForm:FormGroup = this.fb.group({
  headerInput: this.fb.array([
  ])
});
  constructor(private wcs:WebclusterService, private fb:FormBuilder) { 
  }
  ngOnInit() {
  	 this.headers=this.wcs.getHeaders();
  }
  get headerInput() {
  return this.headerForm.get('headerInput') as FormArray;
}
addInput() {
  this.headerInput.push(this.fb.group({dataType: this.fb.control('INTERVAL'),
weight: this.fb.control('1')}));
}
setUp(){
	this.headers.forEach((header)=>{
		this.addInput();
	});
}
update(){
console.log("adding to service")
console.log(this.headerForm.value);
console.log(this.headerInput.value);
let dataTypes=[];
let weights=[];
for(let i=0; i<this.headers.length; i++){
let datatype = this.headerInput.value[i]["dataType"];
let weight = this.headerInput.value[i]["weight"];
dataTypes.push(datatype);
weights.push(weight);
}

console.log(`datatype = ${dataTypes}`);
console.log(`weights = ${weights}`);

this.wcs.setDataType(dataTypes.map(x=>x.toUpperCase()));
console.log(this.wcs.getDataType());
}



}
