import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dad-component',
  templateUrl: './dad-component.component.html',
  styleUrls: ['./dad-component.component.scss']
})
export class DadComponentComponent implements OnInit {
  currentItem = 'Hiiii';
  constructor() { }

  ngOnInit(): void {
  }

}
