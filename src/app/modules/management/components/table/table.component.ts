import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


interface Action {
  icon: string;
  color: string;
  action: Function;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data!: Object[];
  @Input() columns: any = [];
  @Input() paging: any;
  @Input() actions: Action[] = [];
  @Output() pageChange: EventEmitter<{ length: number, pageSize: number, pageIndex: number }> = new EventEmitter();

  displayedColumns: any[] = [];
  dataSource!: MatTableDataSource<any>;


  constructor() {
  }

  ngOnInit() {
    this.initTable();
  }

  ngOnChanges(changes: SimpleChanges) {
    // for (const d of Object.keys(this)) {
    //   if (changes[d]) {
    //   }
    // }
    this.initTable();
  }

  initTable() {
    this.displayedColumns = Object.keys(this.columns);
    this.dataSource = new MatTableDataSource<any>(this.data);

    if (this.actions.length) {
      this.displayedColumns.push('actions');
    }
  }

  get displayColumns() {
    return Object.keys(this.columns);
  }

  page(e: any) {
    this.pageChange.emit(e);
  }

  actionClick(e: any, element: any, act: any) {
    e.stopPropagation();
    act.action(element, act);
  }
}

