import { TangamandapioCmsPage } from './app.po';

describe('tangamandapio-cms App', () => {
  let page: TangamandapioCmsPage;

  beforeEach(() => {
    page = new TangamandapioCmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
