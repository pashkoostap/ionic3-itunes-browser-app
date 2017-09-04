import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItunesProvider } from '../../providers/itunes/itunes';

@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html'
})
export class ArtistPage {
  artist: any;
  albums: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private itunes: ItunesProvider
  ) {
    const { data } = this.navParams;
    this.artist = data;
    this.itunes.loadAlbums(data.id).then(albums => {
      console.log(albums);
      this.albums = albums;
    });
  }

  ionViewDidLoad() {}
}
