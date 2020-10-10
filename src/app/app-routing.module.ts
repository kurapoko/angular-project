import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: 'databinding', component: DatabindingComponent},
  { path: 'pipe', component: PipeComponent},
  { path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
