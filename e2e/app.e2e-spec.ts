import { TrialProjectPage } from './app.po';

describe('trial-project App', function() {
  let page: TrialProjectPage;

  beforeEach(() => {
    page = new TrialProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
