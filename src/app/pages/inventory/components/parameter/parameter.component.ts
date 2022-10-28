import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParameterComponent {
  @Input() controlId = '';
  @Input() labelText = '';
}
