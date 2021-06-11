import { Arbre } from './../arbre';
import { Element } from './../element';
import { Component, OnInit } from '@angular/core';
import { ArbreService } from './../Services/arbre.service';
import { ActivatedRoute } from '@angular/router';
import { AnyCnameRecord } from 'dns';

@Component({
  selector: 'app-updateelement',
  templateUrl: './updateelement.component.html',
  styleUrls: ['./updateelement.component.scss']
})
export class UpdateelementComponent implements OnInit {

  arbres:any;
  elements:any
  arbre = new Arbre();
  element= new Element();
  id1:any
  id2:any
  data:any
  constructor(private route:ActivatedRoute, private arbreservice:ArbreService) {
      this.route.paramMap.subscribe( params => {
    this.id1 = params.get('id1');
    this.id2 = params.get('id2');

  });
   }

  ngOnInit(): void {
  this.getData()
   console.log(this.id2)
 
  }
  getData(){
    this.arbreservice.getelementbyid(this.id1,this.id2).subscribe(res=>{

     this.data =res
     this.element = this.data
    })
  }
  updateArbredataelement(){
    this.arbreservice.updateelement(this.id1,this.id2,this.element).subscribe(res =>{
      
       console.log("heloo")
      })

}
}