import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-item2',
  templateUrl: './list-item2.component.html',
  styleUrls: ['./list-item2.component.css']
})
export class ListItem2Component implements OnInit {

  listItems2$: Object

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getListItems2().subscribe(
      data => this.listItems2$ = data
    );
  }

}
