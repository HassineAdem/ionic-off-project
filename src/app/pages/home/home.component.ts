import { MenuController } from '@ionic/angular';
import { AddService } from './../add.service';
import { Component, OnInit,Input  } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() user: string;
  ListShowHome: any[] = [];
  index: number = 0;
  private receiver: string = 'Proxym-Group';
  private montant: number = 1000;
  private date: string = '20/20/2020';
  constructor(private router: Router, private addService: AddService,private menu:MenuController) {
    this.ListShowHome = this.addService.ListChHome;
  
    for (let card of addService.ListChHome ){
     console.log (card);
    }
  }

  ngOnInit() {}
  OnaddClick() {
    this.router.navigateByUrl('/home/add');
  }
  onList() {
    this.router.navigateByUrl('/home/list');
  }
  openMenu() {

  }
}
