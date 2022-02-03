import './menu.scss';
import { BaseComponent } from '../baseComponent';
import { Button } from '../button/button';

export class Menu extends BaseComponent {
  private toHome: Button = new Button(this.element, ['button', 'menu__button'], 'Home', false);

  private toAbout: Button = new Button(this.element, ['button', 'menu__button'], 'About', false);

  constructor(node: HTMLElement) {
    super(node, 'div', ['menu']);
    this.toHome.changeHashOnclick('/');
    this.toAbout.changeHashOnclick('/about');
  }
}
