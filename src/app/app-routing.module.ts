import { AttributsofattributsComponent } from './attributsofattributs/attributsofattributs.component';
import { UpdatattributComponent } from './updatattribut/updatattribut.component';
import { AttributsComponent } from './attributs/attributs.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ElementsComponent } from './elements/elements.component';
import { ArbresComponent } from './arbres/arbres.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ ArbreUpdateComponent } from './arbre-update/arbre-update.component';
import {UpdateelementComponent} from './updateelement/updateelement.component';

const routes: Routes = [
  {path:'about',component: AboutComponent},
  {path:'home',component: HomeComponent},
  {path:'arbres',component: ArbresComponent },
  {path:'addarbre',component: ArbresComponent },
  {path:'arbres/:id/edit',component: ArbreUpdateComponent },
  {path:'arbres/:id/elements',component: ElementsComponent },
  {path:'arbres/:id1/elements/:id2/attributs',component: AttributsComponent },
  {path:'arbres/:id1/elements/:id2/edit',component: UpdateelementComponent},
  {path:'arbres/:id1/elements/:id2/attributs/:id3/edit',component: UpdatattributComponent},
  {path:'arbres/:id1/elements/:id2/attributs/:id3/attributs',component: AttributsofattributsComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArbresComponent]
