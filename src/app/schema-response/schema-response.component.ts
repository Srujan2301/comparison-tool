import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comparator } from "../comparator";
import { ComparatorService } from '../comparator.service';

@Component({
  selector: 'app-schema-response',
  templateUrl: './schema-response.component.html',
  styleUrls: ['./schema-response.component.css']
})
export class SchemaResponseComponent implements OnInit {

  ddl_dml : any;
  srcList: any;
  tarList: any;
  srcTable: any;
  tarTable: any;
  comparator: any;
  nextDdl: any;
  nextDml: any;
  load : any;
  error: any;


  constructor(private route: ActivatedRoute, private service: ComparatorService) { }

  ngOnInit(): void {
    console.log(Comparator.getSchemaDiff());
    this.srcList = JSON.parse(localStorage.getItem('srcList') || '[]');
    this.tarList = JSON.parse(localStorage.getItem('tarList') || '[]');
    console.log(Comparator.getTarList());
    console.log(Comparator.getSrcList());
    console.log(localStorage.getItem('srcList'));
    console.log(localStorage.getItem('tarList'));
  }

  public responseValidate(){
    console.log("Schema Response TS");
    this.load = true;
    this.error = false;
    if(this.ddl_dml == "DDL"){
      this.service.postDdl({sourceTable: this.srcTable, targetTable: this.tarTable, ddldml:this.ddl_dml}).subscribe(data => {this.comparator = data;
        console.log(this.comparator);
        this.load = false;
        this.error = false;
        if(this.comparator.keyList != null) this.nextDdl = true;
        else this.nextDdl = false;
        Comparator.setSourceRows(this.comparator.sourceRows);
        Comparator.setTargetRows(this.comparator.targetRows);
        Comparator.setList(this.comparator.list);
        Comparator.setKeyList(this.comparator.keyList);
        Comparator.setSourceTable(this.comparator.sourceTable);
        Comparator.setTargetTable(this.comparator.targetTable);
        Comparator.setDdlDml(this.comparator.ddl_dml);        
        localStorage.setItem('sourceRows', this.comparator.sourceRows);
        localStorage.setItem('targetRows', this.comparator.targetRows);
        localStorage.setItem('list', JSON.stringify(this.comparator.list));
        localStorage.setItem('keyList', JSON.stringify(this.comparator.keyList));
        localStorage.setItem('sourceTable', this.comparator.sourceTable);
        localStorage.setItem('targetTable', this.comparator.targetTable);
        localStorage.setItem('ddldml', this.comparator.ddldml);
        
    
    
      })

    }else if(this.ddl_dml == "DML"){
      this.service.postDml({sourceTable: this.srcTable, targetTable: this.tarTable, ddldml:this.ddl_dml}).subscribe(data => {this.comparator = data;
        console.log(this.comparator);
        this.load = false;
        this.error = false;
        if(this.comparator.srcColumns != null) this.nextDml = true;
        else this.nextDml = false;
        Comparator.setSrcColumns(this.comparator.srcColumns);
        Comparator.setTarColumns(this.comparator.tarColumns);
        Comparator.setDataSrcTarList(this.comparator.dataSrcTarList);
        Comparator.setDataTarSrcList(this.comparator.dataTarSrcList);
        Comparator.setDiffColumn(this.comparator.diffColumn);
        Comparator.setDiffData(this.comparator.diffData);
        Comparator.setDdlDml(this.comparator.ddl_dml);        
        localStorage.setItem('srcColumns', JSON.stringify(this.comparator.srcColumns));
        localStorage.setItem('tarColumns', JSON.stringify(this.comparator.tarColumns)) ;
        localStorage.setItem('dataSrcTarList', JSON.stringify(this.comparator.dataSrcTarList));
        localStorage.setItem('dataTarSrcList', JSON.stringify(this.comparator.dataTarSrcList));
        localStorage.setItem('diffColumns', JSON.stringify(this.comparator.diffColumn));
        localStorage.setItem('diffData', JSON.stringify(this.comparator.diffData));
        localStorage.setItem('ddldml', this.comparator.ddldml);

       
    })
    

  }else{
    this.error = true;
    this.load = false;
  }

}
}
