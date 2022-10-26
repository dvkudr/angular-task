import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parameter-selector',
  templateUrl: './parameter-selector.component.html',
  styleUrls: ['./parameter-selector.component.scss'],
})
export class ParameterSelectorComponent {
  @Input() controlId = '';
  @Input() labelText = '';
}

