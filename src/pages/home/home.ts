import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';
import { AddItemPage } from '../add-item/add-item';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items=[];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public dataService: DataProvider) {
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = JSON.parse(todos);
      }
    })
  }

  ionViewDidLoad(){
   
  }

  addItem(){
    let addModal =this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    })
    addModal.present();
  }
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item:item
    })
  }

}
