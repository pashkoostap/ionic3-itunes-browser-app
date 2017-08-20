import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  countries: Array<any>;
  selectedCountry: Object;
  infoText: string = 'Select country';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.countries = [
      {
        name: 'United States',
        local_name: 'USA',
        code: 'US',
        currency: '$'
      },
      {
        name: 'United Kingdom',
        local_name: 'UK',
        code: 'UK',
        currency: '£'
      },
      {
        name: 'Ukraine',
        local_name: 'UA',
        code: 'UA',
        currency: '₴'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onCountrySelect(country) {
    this.selectedCountry = country;
    this.infoText = `Selected country: ${country.name}`;
  }
}
