import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import searchResults from '../../mock-data/mock-search-results';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  results: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.results = searchResults.results;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getIconType(result) {
    return result.kind === 'song' ? 'musical-notes' : 'film';
  }
}
