import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contact-us.html'
})
export class ContactUsPage {
  contactForm: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    fb: FormBuilder
  ) {
    this.contactForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendForm() {
    console.log(this.contactForm);
  }
}
