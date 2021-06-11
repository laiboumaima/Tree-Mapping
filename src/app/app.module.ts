import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { ArbresComponent } from './arbres/arbres.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArbreUpdateComponent } from './arbre-update/arbre-update.component';
import { ElementsComponent } from './elements/elements.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { AttributsComponent } from './attributs/attributs.component';
import { ArbreComponent } from './arbre/arbre.component';
import { UpdateelementComponent } from './updateelement/updateelement.component';
import { UpdatattributComponent } from './updatattribut/updatattribut.component';
import { AddattributComponent } from './addattribut/addattribut.component';
import { AttributsofattributsComponent } from './attributsofattributs/attributsofattributs.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ArbresComponent,
    ArbreUpdateComponent,
    ElementsComponent,
    HomeComponent,
    AboutComponent,
    AttributsComponent,
    ArbreComponent,
    UpdateelementComponent,
    UpdatattributComponent,
    AddattributComponent,
    AttributsofattributsComponent,
  
  ],
  imports: [
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ArbresComponent,ElementsComponent,ArbreComponent,ArbreUpdateComponent]

})
export class AppModule { }
