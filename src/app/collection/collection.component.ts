import { Component, OnInit } from '@angular/core';
import {CollectableService} from '../collectable.service';
import {CollectableModel} from '../collectable.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {

  collectedItems: CollectableModel[] = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }

  onRemoveFromCollection(item: CollectableModel) {
    this.collectableService.removeFromCollection(item);
  }

}
