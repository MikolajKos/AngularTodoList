import { Injectable } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  constructor() { }

  sumClicks = 0;

  data = {id: 1, name: 'Mikolaj', surname: 'Kosiorek', age: 19};

  AddClicks(){
    this.sumClicks += 1;
    console.log('Suma: ' + this.sumClicks);
  }

  AddData(): any{
    return this.data;
  }
}
