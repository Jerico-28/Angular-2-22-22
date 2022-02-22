import { Component, OnInit } from '@angular/core';

@Component({ // Decorators
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
    .color-green{
      color: green;
    }
    .primary{
      color: blue;
    }
    .red{
      color: red;
    }
    .fontI{
      font-style: italic;
    }
    .success{
      background-color : green;
    }
    .error{
      background-color : red;
    }
  `]
})
export class TestComponent implements OnInit {
  // Property Binding
  public firstID = "newID";
  public isDisabled = true;

  // Class Bindings
  public fontColor = "color-green";
  public isTrue = true;
  public isSet = true;
  public hasInfo = true;

  public multipleClasses =
  {
    'primary' : this.hasInfo,
    'red' : !this.hasInfo,
    'fontI' : this.isSet
  }

  // Event Binding
  public toggle = true;
  public status = "Success";
  enableStatus(){
    // code ..
    this.toggle = !this.toggle;
    //              IF      THEN  mode   ELSE mode
    this.status = this.toggle ? 'Success' : 'Error';
  }

  enableInput(){
    this.isDisabled = false;
  }

  // Two Way Binding
  public myValue = "";


  constructor() { }

  ngOnInit(): void {
  }

}
