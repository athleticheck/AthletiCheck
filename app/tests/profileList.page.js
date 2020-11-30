import { Selector } from 'testcafe';

class profileListPage {
  constructor() {
    this.pageId = '#profileList-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}
export const profileListPage = new profileListPage();
