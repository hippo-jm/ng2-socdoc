import { Ng2Test01Page } from './app.po';

describe('ng2-test01 App', function() {
  let page: Ng2Test01Page;

  beforeEach(() => {
    page = new Ng2Test01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
