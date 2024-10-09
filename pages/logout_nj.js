exports.Logout = class Logout{

    constructor(page){
        this.page=page
        this.username_textbox =  page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
        this.logout_button = page.getByRole('link', { name: 'Logout' })
    }

    
    async GoToURL(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    } 

    async loginfunc(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
       
    }

    async logoutfunc(){
        await this.logout_button.click()
    }

}