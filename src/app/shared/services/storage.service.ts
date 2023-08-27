import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Color } from 'src/app/tab1/tab1.page';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(public ionicStorage: Storage) { 
    this.ionicStorage.create();
  }

  clearStorage() {
    this.ionicStorage.clear();
    console.log('here');
  }

  removeItem(color: Color) {
    this.ionicStorage.remove(color.id);
  }

  setItem(id: string, hex: string) {
    this.ionicStorage.set(id, {id, hex});
  }

}
