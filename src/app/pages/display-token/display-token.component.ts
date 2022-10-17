import { AfterContentInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommmonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-display-token',
  templateUrl: './display-token.component.html',
  styleUrls: ['./display-token.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DisplayTokenComponent implements OnInit {
  @Input() display_token: string = "";

  constructor(private commonService: CommmonService) { }

  ngOnInit(): void {
    this.commonService.token
      .subscribe({
        next: x => { console.log(`display-token: ${x}`); this.display_token = x }
      });
  }
}
