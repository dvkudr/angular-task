import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommmonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-task';
  public authToken = '';
  public authError = '';
  readonly subscription: Subscription = new Subscription();

  constructor(private commonService: CommmonService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.commonService.authToken$.subscribe({
        next: x => (this.authToken = x),
      })
    );

    this.subscription.add(
      this.commonService.authError$.subscribe({
        next: x => (this.authError = x),
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

