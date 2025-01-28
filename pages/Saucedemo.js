exports.Saucedemo = class Saucedemo {

    constructor(page) {
        this.page = page
        this.username_textbox = page.locator('[data-test="username"]')
        this.password_textbox = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.product = page.locator('[data-test="item-4-img-link"]')
        this.addtocartbutton = page.locator('[data-test="add-to-cart"]')
        this.cart_icon = page.locator('[data-test="shopping-cart-link"]')
        this.checkout_button = page.locator('[data-test="checkout"]')
        this.FName_checkout = page.locator('[data-test="firstName"]')
        this.LName_checkout = page.locator('[data-test="lastName"]')
        this.postalcord_checkout = page.locator('[data-test="postalCode"]')
        this.continue_checkout = page.locator('[data-test="continue"]')
        this.finish_aftercheckout = page.locator('[data-test="finish"]')
        this.BacktoHome = page.locator('[data-test="back-to-products"]')
        this.BacktoProducts = page.locator('[data-test="back-to-products"]') 

    }

    async GoToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async sauceLogin(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.loginButton.click()

    }

    async addtocart_BacktoProducts(Fname, Lname,) {
        await this.product.click()
        await this.addtocartbutton.click()
        await this.BacktoProducts.click()
        // await this.cart_icon.click()
        // await this.FName_checkout.fill(Fname)
        // await this.LName_checkout.fill(Lname)
        // await this.postalcord_checkout.fill(Number)
        // await this.continue_checkout.click()
        // await this.finish_aftercheckout.click()
        // await this.BacktoHome.click()
    }

    async addtocart_Checkout(Fname, Lname,) {
        await this.product.click()
        await this.addtocartbutton.click()
        await this.cart_icon.click()
        await this.continue_checkout.click()
        await this.FName_checkout.fill(Fname)
        await this.LName_checkout.fill(Lname)
        await this.postalcord_checkout.fill(Number)
        await this.continue_checkout.click()
        await this.finish_aftercheckout.click()
        await this.BacktoHome.click()

}


}