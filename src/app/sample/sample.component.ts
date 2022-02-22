import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  public displaySection = false;
  public color = "black";

  public grade = 198;

  public gradeStat = ["Average", "Excellent", "Superior"];

  constructor() { }

  ngOnInit(): void {
  }
  
  logInput(value){
    console.log(value);
  }

}
