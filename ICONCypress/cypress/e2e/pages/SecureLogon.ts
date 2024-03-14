class SecureLogon {
    USERNAME = () => cy.get('.credentials_input_text')
    PASSWORD = () => cy.get('.credentials_input_password')
    LOGON = () => cy.get('.credentials_input_submit')

    ICON_URL = 'https://icon.uat.rfs.nsw.gov.au/'

    logon(username: string, password: string) {
        cy.visit(this.ICON_URL)
        this.USERNAME().type(username)
        this.PASSWORD().type(password)
        this.LOGON().click()
    }
}
export default SecureLogon