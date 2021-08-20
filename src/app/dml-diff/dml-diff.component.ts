import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comparator } from '../comparator';
import { ComparatorService } from '../comparator.service';

@Component({
  selector: 'app-dml-diff',
  templateUrl: './dml-diff.component.html',
  styleUrls: ['./dml-diff.component.css']
})
export class DmlDiffComponent implements OnInit {

  srcColumns : any;
  tarColumns: any;
  dataSrcTarList: any;
  dataTarSrcList: any;
  diffColumns: any;
  diffData: any;

  constructor(private route: ActivatedRoute, private service: ComparatorService) { }

  ngOnInit(): void {
    console.log(Comparator.getSrcColumns());
    // this.srcColumns = Comparator.getSrcColumns();
    // this.tarColumns = Comparator.getTarColumns();
    // this.dataSrcTarList = Comparator.getDataSrcTarList();
    // this.dataTarSrcList = Comparator.getDataTarSrcList();
    // this.diffData = Comparator.getDiffData();
    // this.diffColumns = Comparator.getDiffColumn();
    

    this.srcColumns = JSON.parse(localStorage.getItem('srcColumns') || '[]');
    this.tarColumns = JSON.parse(localStorage.getItem('tarColumns') || '[]');
    this.dataSrcTarList = JSON.parse(localStorage.getItem('dataSrcTarList') || '[]');
    this.dataTarSrcList = JSON.parse(localStorage.getItem('dataTarSrcList') || '[]');
    this.diffData = JSON.parse(localStorage.getItem('diffData') || '[]');
    this.diffColumns = JSON.parse(localStorage.getItem('diffColumns') || '[]');
  }

  
}
