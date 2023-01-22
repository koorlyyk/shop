module.exports = {
    command: function (selector, value) {
        this
        .waitForElementVisible(selector)
        .click(selector)
        .setValue(selector, [value, browser.Keys.ENTER])
        browser.assert.urlContains(encodeURI(value))
        return this
    }
}