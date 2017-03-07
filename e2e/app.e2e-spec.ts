import { NgRxExamplesPage } from './app.po';

describe('ng-rx-examples App', () => {
  let page: NgRxExamplesPage;

  beforeEach(() => {
    page = new NgRxExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ay works!');
  });
});
