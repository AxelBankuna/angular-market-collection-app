import { Injectable } from '@angular/core';
import {CollectableModel} from './collectable.model';

@Injectable({
  providedIn: 'root'
})
export class CollectableService {

  collection = [];

  collectables = [
    { description: 'January', type: 'Wall' },
    { description: 'February', type: 'Stone' },
    { description: 'March', type: 'Tablet' },
    { description: 'April', type: 'Paper' },
    { description: 'May', type: 'Book' },
  ];

  constructor() { }

  getCollectables() {
    return this.collectables;
  }

  getCollection() {
    return this.collection;
  }

  addToCollection(item: CollectableModel) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item: CollectableModel) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }

}
