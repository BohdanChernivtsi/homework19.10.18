import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component'
import { ListItem2Component } from './list-item2/list-item2.component'
import { ListItem3Component } from './list-item3/list-item3.component'

const routes: Routes = [{
  path: '',
  component: ListItemComponent
},
{
  path: 's',
  component: ListItem2Component
},
{
  path: 'details/:id',
  component: ListItem3Component
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
