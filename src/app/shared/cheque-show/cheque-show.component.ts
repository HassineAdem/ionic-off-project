import { AddService } from './../../pages/add.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cheque-show',
  templateUrl: './cheque-show.component.html',
  styleUrls: ['./cheque-show.component.scss'],
})
export class ChequeShowComponent implements OnInit {
  @Input() username: string;
  @Input() montant: number;
  @Input() popCheque: (index: number) => void;
  constructor(private addService: AddService) {}

  ngOnInit() {}
}
