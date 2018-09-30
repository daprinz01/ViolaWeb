import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import 'jquery';
import {$} from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }
animateElements() {
if ($(document.readyState)) {
$('#awareness').addClass('animated infinite bounce delay-2s');
}
}
  ngOnInit() {
    this.animateElements();
   }


}

