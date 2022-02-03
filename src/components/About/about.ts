import { BaseComponent } from '../../shared/baseComponent';
import './about.scss';

export class About extends BaseComponent {
  constructor(node: HTMLElement) {
    super(node, 'section', ['about']);
  }
}
