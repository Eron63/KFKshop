import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //menu: MenuController;

  constructor( /*menu: MenuController*/) { }

  ngOnInit() {}
  
  /**openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
 */
}
