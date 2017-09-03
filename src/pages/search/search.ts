import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  ActionSheetController,
  ModalController,
  AlertController
} from 'ionic-angular';
import { PreviewPage } from '../preview/preview';
import { ItunesProvider } from '../../providers/itunes/itunes';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  results: Array<any> = [];
  keyword: String = '';
  usersFilter: boolean;
  unfilteredResults: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private itunes: ItunesProvider,
    private actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {}

  getIconType(result) {
    return result.kind === 'song' ? 'musical-notes' : 'film';
  }

  search() {
    this.itunes.search(this.keyword).then(results => {
      if (!results.length) {
        const alert = this.alertCtrl.create({
          title: 'The iTunes API says...',
          subTitle: 'No match found',
          buttons: ['Try again']
        });
        alert.present();
      }

      this.results = results;
      this.unfilteredResults = results;
      this.usersFilter = false;
    });
  }

  onSearch(e) {
    const { keyCode } = e;
    const searchValue = this.keyword.toLocaleLowerCase();

    if (this.keyword.trim() === '') {
      const alert = this.alertCtrl.create({
        title: 'Empty search not allowed',
        subTitle: 'Please key in your search',
        buttons: [
          'Cancel',
          {
            text: 'Search...',
            handler: data => {
              if (data.term) {
                this.keyword = data.term;
                this.search();
              } else {
                return false;
              }
            }
          }
        ],
        inputs: [
          {
            name: 'term',
            placeholder: 'Search for...'
          }
        ]
      });

      return alert.present();
    }

    if (keyCode !== 13) {
      this.search();
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

  openPreview(track) {
    const alert = this.alertCtrl.create({
      title: 'Show preview?',
      buttons: [
        'No',
        {
          text: 'Yes!',
          handler: () => {
            const modal = this.modalCtrl.create(PreviewPage, {
              track
            });
            modal.present();
          }
        }
      ]
    });
    alert.present();
  }

  reloadData(refresher) {
    this.results = [];
    this.itunes.search(this.keyword).then(results => {
      this.results = results;
      refresher.complete();
    });
  }
}
