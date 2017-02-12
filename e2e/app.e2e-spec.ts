import { ProyectoSpotifyPage } from './app.po';

describe('proyecto-spotify App', function() {
  let page: ProyectoSpotifyPage;

  beforeEach(() => {
    page = new ProyectoSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
