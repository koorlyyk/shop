const pageCommands = {
  search(word) {
    this
      .setValue('@searchBar', word)
      .strictClick({selector: '@submitButton', index: 0});
    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'http://en.wikipedia.org/',
  commands: [pageCommands],
  elements: {
    welcome: '#mp-welcome',
    searchBar: {selector: '//input[@name="search"]', locateStrategy: 'xpath'},
    submitButton: {selector:'[name="go"]'},
    pageTitle: {selector: '#firstHeading', index: 0}
  },
  sections:{
    topMenu: {
      selector: '.vector-menu-content-list',
      elements: {
        logIn: '#pt-login span',
        creatAcc: '#pt-createaccount',
        contributions: '#pt-anoancontribs'
      }
    }
  }
}
