import { Router } from '@angular/router';
import { AddService } from './../add.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private addService: AddService, private router: Router) {}
  onClick() {
    this.router.navigateByUrl('/home/add');
  }
  mypopCheque(index: number) {
    return () => this.addService.ListCh.splice(index, 1);
  }
  ngOnInit() {}
}
