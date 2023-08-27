import { Component } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private storageService: StorageService) {}

  clearStorage() {
    this.storageService.clearStorage();
  }

}
