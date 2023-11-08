import { Component } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-clicker1',
  templateUrl: './clicker1.component.html',
  styleUrls: ['./clicker1.component.css']
})
export class Clicker1Component {
  constructor(private clickService: ClickService) {}
  
  clicks: number = 0;
  
  add(){
    this.clicks += 1;
    this.clickService.AddClicks();
  }
}
