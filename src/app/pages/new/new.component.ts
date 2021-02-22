import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['position', 'image', 'name', 'gender', 'age'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData().subscribe((data) => {
      if (data) {
        this.data = data['results'];
        let i = 0;
        this.data.forEach((element) => {
          i++;
          element.position = i;
        });
      }
      console.log(this.data);
    });
  }
  getData() {
    return this.http.get(
      'https://randomuser.me/api/?results=50&seed=interview'
    );
  }
}
