import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html'
})
export class ArtistPage {
  artist: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artist = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistPage');
    console.log(this.navParams);
  }
}
