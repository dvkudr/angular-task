import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-text',
  templateUrl: './display-text.component.html',
  styleUrls: ['./display-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayTextComponent implements OnInit {
  @Input() text: string = "";

  ngOnInit(): void { }
}
