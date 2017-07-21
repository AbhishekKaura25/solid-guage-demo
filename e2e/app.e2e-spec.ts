import { SolidguagedemoPage } from './app.po';

describe('solidguagedemo App', () => {
  let page: SolidguagedemoPage;

  beforeEach(() => {
    page = new SolidguagedemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
