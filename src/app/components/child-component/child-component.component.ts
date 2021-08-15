import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() item = '';
 @Output() itemChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  itemChangeValue(){
    this.itemChange.emit('Change text with Banana In A Box')
  }

}
