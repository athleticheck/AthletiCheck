import { Selector } from 'testcafe';

class AddVisitPage {
  constructor() {
    this.pageId = '#addVisit-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}
export const addVisitPage = new AddVisitPage();
