import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'spa-search-devs',
  templateUrl: './search-devs.Component.html',
  styleUrls: ['./search-devs.component.css']
})
export class SearchDevsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 5;

}