import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildComponent} from './child-component/child.component';
import {MainComponentGuard} from './main-component/guard';
import {MainComponent} from './main-component/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canDeactivate: [MainComponentGuard]
  },
  {
    path: 'child',
    component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    urlUpdateStrategy: 'eager'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
