import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-text',
  templateUrl: './display-text.component.html',
  styleUrls: ['./display-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayTextComponent {
  @Input() lines = 8;
  @Input() text = '';
}
