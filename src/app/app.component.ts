import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private menuItem = 'recipe';
  onMenuSelected(menuItem: string) {
    this.menuItem = menuItem;
  }
}
