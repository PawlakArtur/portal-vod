import { PortalVodPage } from './app.po';

describe('portal-vod App', () => {
  let page: PortalVodPage;

  beforeEach(() => {
    page = new PortalVodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
