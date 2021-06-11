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
  selector: 'app-updatattribut',
  templateUrl: './updatattribut.component.html',
  styleUrls: ['./updatattribut.component.scss']
})
export class UpdatattributComponent implements OnInit {
  arbres:any;
  elements:any
  arbre = new Arbre();
  element= new Element();
  attribut= new Attribut();
  id1:any
  id2:any
  id3:any
  data:any
  constructor(private route:ActivatedRoute, private arbreservice:ArbreService) {
    this.route.paramMap.subscribe( params => {
  this.id1 = params.get('id1');
  this.id2 = params.get('id2');
  this.id3 = params.get('id3');

});
 }

  ngOnInit(): void {

    this.getData()
    console.log(this.id3)
  }
 getData(){

    this.arbreservice.showattribut(this.id1,this.id2,this.id3).subscribe(res=>{

     this.data =res
     this.attribut = this.data
    })
  }
  update(){
    this.arbreservice.updateattribut(this.id1,this.id2,this.id3,this.attribut).subscribe(res =>{
      
       console.log("updated")
      })

}


}

