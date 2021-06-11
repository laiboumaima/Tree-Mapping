import { Attribut } from './../attribut';

import { Arbre } from './../arbre';
import { Element } from './../element';
import { Component, OnInit , ViewChild } from '@angular/core';
import { ArbreService } from './../Services/arbre.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
@Component({
  selector: 'app-attributsofattributs',
  templateUrl: './attributsofattributs.component.html',
  styleUrls: ['./attributsofattributs.component.scss']
})
export class AttributsofattributsComponent implements OnInit {
  attribut= new Attribut();
  id:any
  idatt:any
  attributs:any
  constructor( private route:ActivatedRoute, private arbreservice:ArbreService) {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id2');
      this.idatt = params.get('id3');
       });
   }
  ngOnInit(): void {
    
    this.getData ();
  }
  getData(){
    this.arbreservice.getelementsattributs(this.idatt).subscribe(res=>{

     this.attributs =res
    
    })
  }
     //insert attribut
     insertattribut(){
      this.arbreservice.addattribut(this.id,this.idatt,this.attribut).subscribe(res =>{
        this.getData()
      })
    }
}
