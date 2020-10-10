import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormComponent } from './form/form.component';
import { MultiComponentsComponent } from './multi-components/multi-components.component';


const routes: Routes = [
  { path: 'databinding', component: DatabindingComponent},
  { path: 'pipe', component: PipeComponent},
  { path: 'form', component: FormComponent},
  { path: 'multi-components', component: MultiComponentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
