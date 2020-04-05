import { Component } from '@angular/core';
import { faBars, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'martinApp';
  faBars=faBars;
  faBell=faBell;
  faChevronDown=faChevronDown;
  openMenu=false;

  clickMenu() {
    this.openMenu= !this.openMenu;
  }
}
