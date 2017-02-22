import { BinDecHexConvertorPage } from './app.po';

describe('bin-dec-hex-convertor App', () => {
  let page: BinDecHexConvertorPage;

  beforeEach(() => {
    page = new BinDecHexConvertorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
