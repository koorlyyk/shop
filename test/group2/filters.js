module.exports = {
    '@tags': ['nav'],
  
    before(browser) {
      browser.page.mainpage()
        .navigate()
        .waitForElementVisible('@catalogueTitle', 'Страница загружена')
    },
    after(browser) {
      browser.end();
    },
    'Open-and-check-category-dropdown': function (browser) {
      browser.page.mainpage()
      .section.navBar
      .strictClick('@categoryButton')
      .waitForElementVisible('@categoryDropdown') //Видят боги веба, я пыталась в норм команды
    },
  }