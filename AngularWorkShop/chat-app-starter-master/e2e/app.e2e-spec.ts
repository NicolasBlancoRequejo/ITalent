import { Angular2StablePage } from './app.po';

describe('angular-2-stable App', function() {
  let page: Angular2StablePage;

  beforeEach(() => {
    page = new Angular2StablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
