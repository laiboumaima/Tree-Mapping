import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ArbreService } from './../Services/arbre.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import{ Arbre } from './../arbre';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-arbre',
  templateUrl: './arbre.component.html',
  styleUrls: ['./arbre.component.scss']
})
export class ArbreComponent implements OnInit {
  arbre = new Arbre();
  
  constructor(private arbreservice :ArbreService) { }

  ngOnInit(): void {
  }
 //insert arbre
 insertarbre(){
  this.arbreservice.insertarbre(this.arbre).subscribe(
    res=>{return console.log("add")}
  )
}
}
