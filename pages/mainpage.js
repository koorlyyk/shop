module.exports = {
    url: 'http://testshop.sedtest-school.ru/',
    // commands: [pageCommands],
    elements: {
      catalogueTitle: {selector : 'h4'},
      searchField: {selector: 'input[name="search"]', locateStrategy: 'css selector'},
      discountButton: '#discount_a',
      clearFilterButton : 'a[class="btn btn-secondary btn-sm"]'
    },
    sections : {
      header: {
        selector: '#navbarCollapse',
        elements: {
          mainpageButton: '#nav_link_main',
          cartButton: '[href^="/mycart/"]',
          favoritesButton: '[href^="/myfavorites/"]',
          authButton: '//a[@class="btn btn-primary"]'
        }
      },
      navBar: {
        selector: 'div[class="row mt-1 pt-1 pb-1 pr-1"]',
        elements : {
          categoryButton : '#dropdownMenuButtonCategory',
          categoryDropdown : 'div[aria-labelledby="dropdownMenuButtonCategory"]',
          priceButton : '#dropdownMenuButtonPrice',
          priceDropdown : 'div[aria-labelledby="dropdownMenuButtonPrice"]',
          countButton : '#dropdownMenuButtonCount' ,
          countDropdown : 'div[aria-labelledby="dropdownMenuButtonCount"]',
          brandButton : '#dropdownMenuButtonBrand',
          brandDropdown : 'div[aria-labelledby="dropdownMenuButtonBrand"]',
          groupButton : '#dropdownMenuButtonGroup',
          groupDropdown : 'div[aria-labelledby="dropdownMenuButtonGroup"]'
      }
    },
      goodsCard: {
        selector : '//div[@class="card ml-1 mr-1 mt-2"]',
        elements : {
            link : '[href^="/product/"]',
            image: '//*[contains(@src, "static/products/")]',
            price: '//div[@class="col-md-6"',
            buyButton: '[href^="/add/in/"]'

        }
    },
    footer : {
        selector : '//div[@class="mt-5"]',
        elements : {
            footerText: '//div[@class="mt-5"]/p[1]',
            footerTopLink: '//a[@href="#"]'
        }
    },
  }
}
