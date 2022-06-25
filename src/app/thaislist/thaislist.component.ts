import { Component, OnInit } from '@angular/core';
import { ThaislistService } from '../thaislist.service';

@Component({
  selector: 'app-thaislist',
  templateUrl: './thaislist.component.html',
  styleUrls: ['./thaislist.component.css']
})
export class ThaislistComponent implements OnInit {
x;
  constructor(private dado: ThaislistService) { }

  ngOnInit() {

this.x = this.dado.getDados();


  }

}