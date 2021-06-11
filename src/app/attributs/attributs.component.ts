import { Attribut } from './../attribut';

import { Arbre } from './../arbre';
import { Element } from './../element';
import { Component, OnInit , ViewChild } from '@angular/core';
import { ArbreService } from './../Services/arbre.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';


@Component({
  selector: 'app-attributs',
  templateUrl: './attributs.component.html',
  styleUrls: ['./attributs.component.scss']
})
export class AttributsComponent implements OnInit {
  arbres:any;
  attributs:any
  arbre = new Arbre();
  element= new Element();
  attribut =new Attribut();
  id:any
  idelement:any
  idarbre:any
  constructor(private route:ActivatedRoute, private arbreservice:ArbreService) { 
    this.route.paramMap.subscribe( params => {
      this.idarbre = params.get('id1');
      this.idelement = params.get('id2');
    
  
    });
  }


  ngOnInit(): void {
    this.id=this.route.snapshot.params.id
   
    this.getAttributselement()
 
  }
    //get arbres elements
    getAttributselement(){
      this.arbreservice.getarbreatributs(this.idarbre,this.idelement).subscribe(res =>{
         this.attributs=res
         console.log("attributs")
        }) }
     
      //insert attribut
      insertattribut(){
        this.arbreservice.insertattribut(this.idarbre,this.idelement,this.attribut).subscribe(res =>{
          this.getAttributselement()
        })
      }
      //delete attribut
      delete(id:any){
        alert("do you want delete");
        this.arbreservice.deleteattribut(this.idarbre,this.idelement,id).subscribe(res=>
         {  this.getAttributselement();})  }
      

}


