import { ArbreComponent } from './../arbre/arbre.component';

import { MatDialogRef } from '@angular/material/dialog';
import { ArbreService } from './../Services/arbre.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import{ Arbre } from './../arbre';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-arbres',
  templateUrl: './arbres.component.html',
  styleUrls: ['./arbres.component.scss']
})

export class ArbresComponent implements OnInit {
   arbres:any;
   arbre = new Arbre();
   
  
  constructor(private arbreservice :ArbreService,private dialog : MatDialog) { }
  listdata: MatTableDataSource<any>;
  displayedColumns: String[] =['id','name','action','download','elements'];
  @ViewChild(MatSort) sort :MatSort;
  @ViewChild(MatPaginator) paginator :  MatPaginator;
  searchKey :string;

  ngOnInit(): void {
    this.getArbredata();
  }
  //get arbres
  getArbredata(){
    this.arbreservice.getArbres().subscribe(res =>{
        
       this.arbres =res
       this.listdata = new MatTableDataSource(this.arbres)
       this.listdata.sort = this.sort;
       this.listdata.paginator = this.paginator;
       
      })
     
    
  }
  //insert arbre
  insertarbre(){
    this.arbreservice.insertarbre(this.arbre).subscribe(
      res=>{this.getArbredata();}
    )



  }
  //delete data 
  delete(id:any){
    alert("do you want delete");
   this.arbreservice.deletearbre(id).subscribe(res=>
    {this.getArbredata();})  }
  //download
  download(id:any){
    return this.arbreservice.download(id)
}
onSearchClean(){
  this.searchKey=""
  this.applyFilter()
}
applyFilter(){
  this.listdata.filter=this.searchKey.trim().toLowerCase()
}

onCreate(){
  const dialogCong =new MatDialogConfig()
  dialogCong.disableClose = false;
  dialogCong.autoFocus=true;
  dialogCong.width="60%"
  this.dialog.open(ArbreComponent,dialogCong)
  
}
}
