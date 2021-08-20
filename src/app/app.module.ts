import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparatorComponent } from './comparator/comparator.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SchemaComponent } from './schema/schema.component'
import { RouterModule } from '@angular/router';
import { SchemaResponseComponent } from './schema-response/schema-response.component';
import { DdlDiffComponent } from './ddl-diff/ddl-diff.component';
import { DmlDiffComponent } from './dml-diff/dml-diff.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparatorComponent,
    SchemaComponent,
    SchemaResponseComponent,
    DdlDiffComponent,
    DmlDiffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: ComparatorComponent},
      {path: 'schema', component: SchemaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
