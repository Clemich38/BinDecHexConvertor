import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Realtime Convertor';

  public binStr: string;
  public hexStr: string;
  public decStr: string;

  constructor()
  {
    this.binStr = "11000001";
    this.hexStr = "AB3F";
    this.decStr = "23670";
  }

  private Convert(num, from, to): string
  {
    return parseInt(num, from).toString(to);
  }


  get binModel() {
    return this.binStr;
  }

  set binModel(value) {
    this.binStr = value;
    this.hexStr = this.Convert(this.binStr, 2, 16);
    this.decStr = this.Convert(this.binStr, 2, 10);
  }

  get hexModel() {
    return this.hexStr;
  }

  set hexModel(value) {
    this.hexStr = value;
    this.binStr = this.Convert(this.hexStr, 16, 2);
    this.decStr = this.Convert(this.hexStr, 16, 10);
  }

  get decModel() {
    return this.decStr;
  }

  set decModel(value) {
    this.decStr = value;
    this.hexStr = this.Convert(this.decStr, 10, 16);
    this.binStr = this.Convert(this.decStr, 10, 2);
  }

}
