import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html'
})
export class PreviewPage {
  public track: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.track = navParams.data.track;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
