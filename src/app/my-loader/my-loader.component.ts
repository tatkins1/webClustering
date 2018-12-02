import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-my-loader',
  templateUrl: './my-loader.component.html',
  animations: [
  trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.1s', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.75s', style({ opacity: 0 }))
  ])
])
  ],
  styleUrls: ['./my-loader.component.css']
})
export class MyLoaderComponent implements OnInit {
	anim1:boolean=true;
	anim2:boolean=true;
	anim3:boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
