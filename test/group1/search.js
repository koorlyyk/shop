module.exports = {
  '@tags': ['search'],

  before(browser) {
    browser.page.mainpage()
      .navigate()
      .waitForElementVisible('@catalogueTitle', 'Страница загружена')
  },
  after(browser) {
    browser.end();
  },
  'Assert-cirillic-word-on-search': function (browser) {
    browser.page.mainpage()
    .inputValue('@searchField', "яблоко")
},
'Assert-latin-word-on-search': function (browser) {
  browser.page.mainpage()
  .inputValue('@searchField', 'car')
},
'Assert-word-on-search': function (browser) {
  browser.page.mainpage()
  .inputValue('@searchField', browser.globals.searchText)
}

};
