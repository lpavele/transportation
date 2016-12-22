import { TransportationPage } from './app.po';

describe('transportation App', function() {
  let page: TransportationPage;

  beforeEach(() => {
    page = new TransportationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
