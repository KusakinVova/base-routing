import { Home } from './components/Home/home';
import { About } from './components/About/about';
import { BaseComponent } from './shared/baseComponent';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

export class App {
  private header: Header = new Header(this.rootElement);

  private main: BaseComponent = new BaseComponent(this.rootElement, 'main', ['main']);

  private home: Home = new Home(this.main.element);

  private about: About = new About(this.main.element);

  private footer: Footer = new Footer(this.rootElement);

  constructor(readonly rootElement: HTMLElement) {
  }

  toHome(): void {
    window.location.hash = '#/';
    this.about.element.remove();
    this.main.element.appendChild(this.home.element);
  }

  toAbout(): void {
    window.location.hash = '#/about';
    this.home.element.remove();
    this.main.element.appendChild(this.about.element);
  }
}
