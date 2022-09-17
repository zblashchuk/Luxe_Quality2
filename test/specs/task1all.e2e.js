const registrationPage = require('../pageobjects/registration.page');const topmenuPage = require('../pageobjects/topmenu.page');
const topMenuPage = require('../pageobjects/topmenu.page');
const searchPage = require('../pageobjects/search.page');

describe('homepage redmine.org', () => {
  beforeEach(async() => {
    await browser.url('/');
  })
  it('should have title "Overview - Redmine"', async () => {
    //await browser.url('https://www.redmine.org/');
    await expect(browser).toHaveTitle('Overview - Redmine');
  })

    it('should go to Registration page after click on register link on top-menu', async () => {
        await topMenuPage.registerButtonClick();
        await expect(browser).toHaveUrlContaining('/account/register');
    });

    it('should Registration be filled required field with valid data', async () => {
      await registrationPage.open();
      await registrationPage.registerInputData();
      await registrationPage.btnSubmitClick();
      await expect(browser).toHaveUrlContaining('login');
  });
  it('should search topics by search feild', async () => {
    //await browser.url('/');
    await topMenuPage.getResultSearch();
    await expect(browser).toHaveUrlContaining('search')
    await searchPage.searchResultContainSearchValue()
});
it('should have clickable all menu items', async () => {
  await browser.url('/');
  await topMenuPage.getMainMenu();
});
})
