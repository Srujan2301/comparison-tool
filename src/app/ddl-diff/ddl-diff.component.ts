import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comparator } from '../comparator';
import { ComparatorService } from '../comparator.service';

@Component({
  selector: 'app-ddl-diff',
  templateUrl: './ddl-diff.component.html',
  styleUrls: ['./ddl-diff.component.css']
})
export class DdlDiffComponent implements OnInit {

  list : any;
  keyList: any;
  srcOwner: any;
  srcTable: any;
  sourceRows: any;
  tarOwner: any;
  tarTable: any;
  targetRows: any;
  comparator: any;


  constructor(private route: ActivatedRoute, private service: ComparatorService) { }

  ngOnInit(): void {
    // console.log(Comparator.getKeyList());
    // this.list = Comparator.getList();
    // this.keyList = Comparator.getKeyList();
    // this.srcOwner = Comparator.getSourceSchema();
    // this.tarOwner = Comparator.getTargetSchema();
    // this.srcTable = Comparator.getSourceTable();
    // this.tarTable = Comparator.getTargetTable();
    // this.sourceRows = Comparator.getSourceRows();
    // this.targetRows = Comparator.getTargetRows();
  

    this.list = JSON.parse(localStorage.getItem('list') || '[]');
    this.keyList = JSON.parse(localStorage.getItem('keyList') || '[]');
    this.srcOwner = localStorage.getItem('sourceSchema');
    this.tarOwner = localStorage.getItem('targetSchema');
    this.srcTable = localStorage.getItem('sourceTable');
    this.tarTable = localStorage.getItem('targetTable');
    this.sourceRows = localStorage.getItem('sourceRows');
    this.targetRows = localStorage.getItem('targetRows');
  }

  
}
