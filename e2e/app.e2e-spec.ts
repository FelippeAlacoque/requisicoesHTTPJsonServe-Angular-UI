import { RequisicoesHttpJsonServerPage } from './app.po';

describe('requisicoes-http-json-server App', () => {
  let page: RequisicoesHttpJsonServerPage;

  beforeEach(() => {
    page = new RequisicoesHttpJsonServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
