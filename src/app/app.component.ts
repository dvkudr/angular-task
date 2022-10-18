import { Component, OnInit } from '@angular/core';
import { CommmonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-task';

  constructor(private commonService: CommmonService) { }
  
  public authToken: string = "";

  public authError: string = "";

  ngOnInit(): void {
    this.commonService.authToken
      .subscribe({ next: x => this.authToken = x });

    this.commonService.authError
      .subscribe({ next: x => this.authError = x });
  }
}
