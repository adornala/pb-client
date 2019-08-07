import {Component, OnInit} from '@angular/core';
import {model} from './protos/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const collection = model.Collection.create({
      id: '1',
      name: 'Amarnath',
      description: 'Sample Name'
    });
    console.log(model.Collection.fromObject(collection));
  }
}
