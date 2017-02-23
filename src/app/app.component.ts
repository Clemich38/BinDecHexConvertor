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
  public octStr: string;
  public errorMsg: string;

  constructor()
  {
    this.binStr = "1";
    this.hexStr = "1";
    this.decStr = "1";
    this.octStr = "1";
    this.errorMsg = "";
  }

  private ConvertOld(num, from, to): string
  {
    return parseInt(num, from).toString(to);
  }

  private Convert(value, from)
  {
    if (parseInt(value, from) <= Number.MAX_SAFE_INTEGER)
    {
      this.binStr = this.AddSpaces(parseInt(value, from).toString(2), 4);
      this.hexStr = this.AddSpaces(parseInt(value, from).toString(16), 4);
      this.decStr = this.AddSpaces(parseInt(value, from).toString(10), 3);
      this.octStr = parseInt(value, from).toString(8);
      this.errorMsg = "";
    }
    else
      this.errorMsg = "Number is to big!";
  }


  get binModel() {
    return this.binStr;
  }

  set binModel(value)
  {
    value = value.split(' ').join('');
    this.Convert(value, 2);
  }

  get hexModel() {
    return this.hexStr;
  }

  set hexModel(value)
  {
    value = value.split(' ').join('');
    this.Convert(value, 16);
  }

  get decModel() {
    return this.decStr;
  }

  set decModel(value)
  {
    value = value.split(' ').join('');
    this.Convert(value, 10);
  }

  get octModel()
  {
    return this.octStr;
  }

  set octModel(value)
  {
    value = value.split(' ').join('');
    this.Convert(value, 8);
  }

  private AddSpaces(binStr, size): string
  {
    var length = binStr.length;

    for (var i = length; i > size; i -= size)
    {
      binStr = binStr.slice(0, i - size) + " " + binStr.slice(i - size, binStr.length);
    }
    
    return binStr;
  }

}
