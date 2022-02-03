import { BaseComponent } from '../../shared/baseComponent';
import './home.scss';

export class Home extends BaseComponent {
  constructor(node: HTMLElement) {
    super(node, 'section', ['home']);
  }
}
