import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comparator } from '../comparator'
import { ComparatorService } from '../comparator.service'

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {

  comparator: any;
  sourceSchema :any;
  targetSchema :any;
  nextScreen : any;
  noNext: any;
  next: any;
  err: any;

  constructor(
    private route: ActivatedRoute, private service: ComparatorService
  ) { }

  ngOnInit(): void {
    this.err = false;
    this.nextScreen = false;
    localStorage.setItem('sourceSchema', '');
    localStorage.setItem('targetSchema', '');
    localStorage.setItem('srcList', '');
    localStorage.setItem('tarList', '');
  }

  public schemaValidate(){
    console.log("Schema TS");
    this.service.postSchema({sourceSchema: this.sourceSchema, targetSchema: this.targetSchema}).subscribe(data => {this.comparator = data;
    console.log(this.comparator);
    if(this.comparator.schemaDiff != null && this.comparator.schemaDiff != " " && this.sourceSchema != null && this.targetSchema != null) {
      this.nextScreen = true;
      this.err = false;
  
    }
    else{
      this.err = true;
      this.nextScreen = false;
    } 
    this.next = true;
    Comparator.setSchemaDiff(this.comparator.schemaDiff);
    Comparator.setSrcList(this.comparator.srcList);
    Comparator.setTarList(this.comparator.tarList);
    localStorage.setItem('sourceSchema', this.sourceSchema);
    localStorage.setItem('targetSchema', this.targetSchema);
    localStorage.setItem('srcList', JSON.stringify(this.comparator.srcList));
    localStorage.setItem('tarList', JSON.stringify(this.comparator.tarList));
    

  })

  }

}
