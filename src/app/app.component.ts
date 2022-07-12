import { Component, OnInit } from '@angular/core';
import { Params } from './smartguage/params';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my smart guage';
  params1!: Params;
  params2!: Params;

  ngOnInit(): void {
    this.params1 = {min: 0, max: 180, value: 100, width: '100%', height: '100%', color: 'pink', bgcolor: 'black'};
    this.params2 = {min: -180, max: 180, value: 100, width: '100%', height: '100%'};
    setInterval(() => {
      this.params1.value = Math.floor(Math.random() * 40 + 70);
      this.params2.value = Math.floor(Math.random() * 40 + 70);
    }, 500)
  }
}
