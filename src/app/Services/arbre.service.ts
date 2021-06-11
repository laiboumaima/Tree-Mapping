import { Attribut } from './../attribut';
import { element } from 'protractor';
import { Arbre } from './../arbre';
import{ Element } from './../element'
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbreService {

   api:string= "http://127.0.0.1:8000/";
  constructor(private httpClient: HttpClient) {}
  getArbres(){
      return this.httpClient.get<any>(this.api+'api/arbres')
  }
 
  //insert
  insertarbre(arbre:Arbre) {
    return this.httpClient.post(this.api+'api/arbres',arbre,{ headers : new HttpHeaders} )
      
}
//get arbre by id
getarbrebyid(id:any) {
  return this.httpClient.get(this.api+'api/arbres/'+id )
    
}
// delete
deletearbre(id:any){
  return this.httpClient.delete(this.api+'api/arbres/'+id);
}
//update
updatearbre(id:any,arbre:Arbre) {
  return this.httpClient.put(this.api+'api/arbres/'+id,arbre,{ headers : new HttpHeaders} )
    
}
//getelemntbyid
getelementbyid(id1:any,id2:any){
  return this.httpClient.get<any>(this.api+'api/arbres/'+id1+'/elements/'+id2)
}
//get element
getarbreelements(id:any){
  return this.httpClient.get<any>(this.api+'api/arbres/'+id+'/elements')
}
//insert element
insertelement(id:any ,element:Element){
  return this.httpClient.post(this.api+'api/arbres/'+id+'/elements',element,{ headers : new HttpHeaders} )
}
//delete element
deletelement(id:any, idelement:any){
  return this.httpClient.delete(this.api+'api/arbres/'+id+'/elements/'+idelement);
}
//update element 
updateelement(id:any,ide:any,element:Element){
  return this.httpClient.put(this.api+'api/arbres/'+id+'/elements/'+ide,element,{ headers : new HttpHeaders} )
    

}
//download
download(id:any){
  return window.location.href= this.api+'api/download/'+id;

}
//getattrubit od element
getelementsattributs(idattribut:any){
  return this.httpClient.get<any>(this.api+'api/attribut/'+idattribut+'/attributs')

}
//atributs
getarbreatributs(id:any,idelement:any){
  return this.httpClient.get<any>(this.api+'api/arbres/'+id+'/elements/'+idelement+'/attributs' )
}
//insert attribut
insertattribut(id:any ,idelement:any,attribut:Attribut){
  return this.httpClient.post(this.api+"api/arbres/"+id+'/elements/'+idelement+'/attributs',attribut,{ headers : new HttpHeaders} )
}
//update attribut
updateattribut(id:any,ide:any,ida:any,attribut:Attribut){
  return this.httpClient.put(this.api+'api/arbres/'+id+'/elements/'+ide+'/attributs/'+ida,attribut,{ headers : new HttpHeaders} )

}

//insert attribut 
addattribut(id:any,ida:any,attribut:Attribut){
  return this.httpClient.post(this.api+'api/elements/'+id+'/attributs/'+ida,attribut,{ headers : new HttpHeaders} )
}
//delette attribut
deleteattribut(id:any, idelement:any,idattribut:any){
  return this.httpClient.delete(this.api+'api/arbres/'+id+'/elements/'+idelement+'/attributs/'+idattribut);
}
//
showattribut(id:any,id2:any,id3:any){
  return   this.httpClient.get(this.api+'api/arbres/'+id+'/elements/'+id2+'/attributs/'+id3)
 
}


}
