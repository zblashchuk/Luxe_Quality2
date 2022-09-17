

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchResult () {
        return $('#search-results');
    }
   
    async searchResultContainSearchValue() {
    await expect(this.searchResult).toHaveTextContaining('documentation');
}

}

module.exports = new SearchPage();
