
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
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {
  arbres:any;
  elements:any
  arbre = new Arbre();
  element= new Element();
  id2:any
  id:any
  constructor(private route:ActivatedRoute, private arbreservice:ArbreService,private dialog : MatDialog) {
    this.route.paramMap.subscribe( params => {
      
      this.id2 = params.get('id2');
  
    });
   }
   listdata: MatTableDataSource<any>;
   displayedColumns: String[] =['id','name','action','elements'];
   @ViewChild(MatSort) sort :MatSort;
   @ViewChild(MatPaginator) paginator :  MatPaginator;
   searchKey :string;
 
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id
   
    this.getArbredataelement()
  }
  //get arbres elements
  getArbredataelement(){
    this.arbreservice.getarbreelements(this.id).subscribe(res =>{
       this.elements =res
       this.listdata = new MatTableDataSource(this.elements)
       this.listdata.sort = this.sort;
       this.listdata.paginator = this.paginator;
      })
    
  }
  insertarbreelement(){
    this.arbreservice.insertelement(this.id,this.element).subscribe(
      res=>{
        this.getArbredataelement();}
    )
}
 //delete data 
 deleteelement(id:any){
  alert("do you want delete");
  this.arbreservice.deletelement(this.id,id).subscribe(res=>
   {this.getArbredataelement();})  }



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
    this.dialog.open(ElementsComponent,dialogCong)
    
  }































}