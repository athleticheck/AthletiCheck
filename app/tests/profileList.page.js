import { Selector } from 'testcafe';

class ProfileListPage {
  constructor() {
    this.pageId = '#profileList-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    const rowCount = Selector('tr').count;
    await testController.expect(rowCount).gte(1);
  }
}

export const profileListPage = new ProfileListPage();
