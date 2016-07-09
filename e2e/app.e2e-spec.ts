import { MaterializeCssAppPage } from './app.po';

describe('materialize-css-app App', function() {
  let page: MaterializeCssAppPage;

  beforeEach(() => {
    page = new MaterializeCssAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
