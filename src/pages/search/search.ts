import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ItunesProvider } from '../../providers/itunes/itunes';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  results: Array<any> = [];
  keyword: String;
  usersFilter: boolean;
  unfilteredResults: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private itunes: ItunesProvider,
    private actionSheetCtrl: ActionSheetController
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

  openFilters() {
    const sheet = this.actionSheetCtrl.create({
      title: 'Filter by...',
      buttons: [
        {
          text: 'Movies only',
          icon: 'film',
          handler: () => {
            this.results = this.unfilteredResults.filter(
              item => item.kind === 'feature-movie'
            );
            this.usersFilter = true;
          }
        },
        {
          text: 'Songs only',
          icon: 'musical-notes',
          handler: () => {
            this.results = this.unfilteredResults.filter(
              item => item.kind === 'song'
            );
            this.usersFilter = true;
          }
        },
        {
          text: 'Clear filters',
          role: 'destructive',
          icon: 'refresh',
          handler: () => {
            this.results = this.unfilteredResults;
            this.usersFilter = false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            this.usersFilter = false;
          }
        }
      ]
    });

    sheet.present();
  }
}
