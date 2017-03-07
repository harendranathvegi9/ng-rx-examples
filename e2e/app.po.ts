import { browser, element, by } from 'protractor';

export class NgRxExamplesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ay-root h1')).getText();
  }
}
