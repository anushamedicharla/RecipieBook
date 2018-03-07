import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private menuItem = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDOuMYkUpxIPiV_aAJY-tqzrRy0jZMaYDc',
      authDomain: 'recipebook-65354.firebaseapp.com'
    });
  }

  onMenuSelected(menuItem: string) {
    this.menuItem = menuItem;
  }
}
