import { Component, OnInit } from '@angular/core';
import {CollectableService} from '../collectable.service';
import {CollectableModel} from '../collectable.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styles: []
})
export class MarketComponent implements OnInit {

  collectables: CollectableModel[] = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

  onAddToCollection(item: CollectableModel) {
    this.collectableService.addToCollection(item);
  }

}
