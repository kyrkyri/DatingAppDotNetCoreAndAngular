import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value', // this tag is used to show the value html view in the page app.components.html
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  // constructor get data from an API
  constructor(private http: HttpClient) {}

  // ngOnInit calls when angular component initialized (this happens after the constructor loads)
  // call the function getValues to store values from the api to the variable values
  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
