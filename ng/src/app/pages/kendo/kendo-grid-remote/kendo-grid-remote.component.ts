import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface gridRow {
  name: string;
  gender: string;
  hypeLevel: number;
}

// trigger update on add function
@Component({
  selector: 'app-kendo-grid-remote',
  templateUrl: './kendo-grid-remote.component.html',
  styleUrls: ['./kendo-grid-remote.component.scss']
})
export class KendoGridRemoteComponent {
  gridData: Observable<gridRow[]>;

  constructor(private httpClient: HttpClient) {
    this.gridData = httpClient.get<gridRow[]>("http://localhost:3001/api/grid-data");
  }
}
