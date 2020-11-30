import { Selector } from 'testcafe';

class adminProfilePage {
  constructor() {
    this.pageId = '#adminProfile-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}
export const adminProfilePage = new adminProfilePage();
