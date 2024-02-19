import BasePage from "./BasePage";

class LoginPage{
    
    bs = new BasePage();

    userLoc = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passLoc = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    submitLoc = '.oxd-button'
    assert_loc_text = '.oxd-topbar-header-breadcrumb > .oxd-text'
    login = '../fixtures/login.json' 
    
    Login_With_Valid_User()
    {
        cy.fixture(this.login).then(data => {
            //Use for-each loop to read all the data from the set
            data.forEach((read) => {
                
                cy.get(this.userLoc).type(read.username)
                cy.get(this.passLoc).type(read.password)
                cy.get(this.submitLoc).click()
                cy.get(this.assert_loc_text).should('have.text', read.valid_assert)
            })
        })
    }

}

export default LoginPage

