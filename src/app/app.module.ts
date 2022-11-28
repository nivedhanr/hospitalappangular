import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const myRoute:Routes=[

  {

    path:"",

    component:EntryComponent

  },

  {

    path:"search",

    component:SearchComponent

  },

  {

   path:"delete",

   component:DeleteComponent

  },

  {

    path:"view",

    component:ViewComponent

  }

]
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DeleteComponent,
    SearchComponent,
    ViewComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
