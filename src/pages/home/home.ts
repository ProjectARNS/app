import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChecklistPage } from '../checklist/checklist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, navControl: NavController) {

  }

  onClickVamosLa() {
    this.navCtrl.push(ChecklistPage);
  }

}
