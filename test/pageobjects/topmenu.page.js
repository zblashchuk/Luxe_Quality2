

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TopMenuPage extends Page {
    /**
     * define selectors using getter methods
     */
    get registerButton () {
        return $('.register');
    }
    get mainMenu () {
      return $$('#main-menu ul li');
  }
    get searchField () {
    return $('#q');
}  

    async registerButtonClick() {
    await this.registerButton.click();
}
  async getResultSearch() {
    await this.searchField.click() 
  await this.searchField.addValue('documentation');
  await browser.keys('Enter')
}
    async registerButtonClick() {
    await this.registerButton.click();
}
async getMainMenu() {
  const mainMenuItem = '#main-menu ul li'
  await this.mainMenu.forEach(async(mainMenuItem) => {
    await expect(mainMenuItem).toBeClickable()
    console.log('Menu Items are: ' + await mainMenuItem.getText());
      })
}
   

}

module.exports = new TopMenuPage();
