import { Component } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-clicker2',
  templateUrl: './clicker2.component.html',
  styleUrls: ['./clicker2.component.css']
})
export class Clicker2Component {
  constructor(private clickService: ClickService) {}
  
  clicks: number = 0;
  data: any = {};

  AddUserData(){
    this.data = this.clickService.AddData();
  }

  add(){
    this.clicks += 1;
    this.clickService.AddClicks();
  }
}
