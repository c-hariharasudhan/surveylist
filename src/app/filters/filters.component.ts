import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class Filters implements OnInit {
  @Input() filterType: string;
  @Input() filterValues: string[];
  @Output() onFilterSelected: EventEmitter<string> = new EventEmitter<string>();
  selectedFilter: string = '';

  ngOnInit() {

  }

  setFilter(event, value) {
    if(value === this.selectedFilter) {
      this.selectedFilter = '';
    } else {

      this.selectedFilter = value;
    }
    this.onFilterSelected.emit(this.selectedFilter);
  }
}
