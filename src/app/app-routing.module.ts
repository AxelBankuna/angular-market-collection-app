import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectionComponent} from './collection/collection.component';
import {MarketComponent} from './market/market.component';

const routes: Routes = [
  { path: 'collection', component: CollectionComponent },
  { path: 'market', component: MarketComponent },
  { path: '', redirectTo: '/component', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
