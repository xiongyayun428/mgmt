import { MgmtPage } from './app.po';

describe('mgmt App', function() {
  let page: MgmtPage;

  beforeEach(() => {
    page = new MgmtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
