import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItunesProvider {
  constructor(public jsonp: Jsonp) {}

  search(keyword) {
    let params = new URLSearchParams('callback=JSONP_CALLBACK');

    params.set('term', keyword);

    return this.jsonp
      .request('https://itunes.apple.com/search', {
        search: params
      })
      .toPromise()
      .then(res => res.json().results);
  }
}
