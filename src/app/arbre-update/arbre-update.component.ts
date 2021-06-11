import { Component, OnInit } from '@angular/core';
import { ArbreService } from './../Services/arbre.service';
import { ActivatedRoute } from '@angular/router';
import{ Arbre } from './../arbre';
@Component({
  selector: 'app-arbre-update',
  templateUrl: './arbre-update.component.html',
  styleUrls: ['./arbre-update.component.scss']
})
export class ArbreUpdateComponent implements OnInit {
  id:any
  data:any
  arbre= new Arbre()
  constructor( private route:ActivatedRoute, private arbreservice:ArbreService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id
  this.getData ();
  }
  getData(){
    this.arbreservice.getarbrebyid(this.id).subscribe(res=>{

     this.data =res
     this.arbre = this.data
    })
  }
  updatearbre(){
    this.arbreservice.updatearbre(this.id,this.arbre).subscribe(res=>{
      console.log("hello")
    })
  }

}
