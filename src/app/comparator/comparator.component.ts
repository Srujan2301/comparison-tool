import { Component, OnInit } from '@angular/core';
import { ComparatorService } from '../comparator.service';
import { NgForm } from '@angular/forms';
import { SchemaComponent } from '../schema/schema.component';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.css']
})
export class ComparatorComponent implements OnInit {

  comparator : any;

  public host : any;
  port: any;
  srvName: any;
  username: any;
  password: any;
  nextScreen = false;
  error: any;


  constructor(private service: ComparatorService) { }

  

  ngOnInit(): void {

    this.host = null;
    this.username= null;
    this.password = null;
    this.error = false;
    
    // this.service.postConnection().subscribe(data=>{
    // this.comparator = data;
    // })
  }

  public onSubmitConn(){
    console.log(this.host);
    console.log(this.port);
    this.service.postConnection({host:this.host, port:this.port,srvName:this.srvName, username:this.username, password:this.password}).subscribe(data=>{
      this.comparator = data;
      console.log(this.comparator);

      if(this.comparator != null) {
        this.nextScreen = true;
        this.error = false;
      }
      else{
        this.nextScreen = false;
        this.error = true;
      } 
    });
    
  }

  /**
   * nextSchema
   */  
   public nextSchema() {
    

  }

  
}
