import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');

    this.showAlert();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Novo alerta!',
      subTitle: 'Uma tempestade se aproxima!',
      buttons: [
        {
          text: 'Close'
        },
        {
          text: 'Acess',
          handler: () => {
            this.navCtrl.push(HomePage)
          }
        }
      ]
    });
    window.setTimeout(() => {
      alert.present();
    }, 2000);
  }
}
