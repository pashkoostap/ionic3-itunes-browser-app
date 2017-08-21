import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItunesProvider } from '../../providers/itunes/itunes';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  results: Array<any> = [];
  keyword: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private itunes: ItunesProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getIconType(result) {
    return result.kind === 'song' ? 'musical-notes' : 'film';
  }

  onSearch(e) {
    const { keyCode } = e;
    const searchValue = this.keyword.toLocaleLowerCase();

    if (keyCode !== 13) {
      this.itunes.search(searchValue).then(results => (this.results = results));
    }
  }

  clearSearchResults() {
    this.results = [];
  }
}
