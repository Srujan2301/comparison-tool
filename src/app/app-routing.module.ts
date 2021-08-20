import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComparatorComponent } from './comparator/comparator.component';
import { SchemaComponent } from './schema/schema.component';
import { SchemaResponseComponent } from './schema-response/schema-response.component';
import { DdlDiffComponent } from './ddl-diff/ddl-diff.component';
import { DmlDiffComponent } from './dml-diff/dml-diff.component';

const routes: Routes = [
  { path:'login', component: ComparatorComponent},
  { path:'schema', component: SchemaComponent},
  { path:'schemaResponse', component: SchemaResponseComponent},
  { path: 'ddl', component: DdlDiffComponent},
  { path: 'dml', component: DmlDiffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
