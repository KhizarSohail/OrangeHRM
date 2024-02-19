import BasePage from "./BasePage";

class LoginPage{
    
    bs = new BasePage();

    userLoc = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passLoc = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    submitLoc = '.oxd-button'
    assert_loc_text = '.oxd-topbar-header-breadcrumb > .oxd-text'
    login = '../fixtures/LoginJson/login.json' 
    single = '../fixtures/LoginJson/Single.json'
    
    Login_With_Valid_User()
    {
        cy.fixture(this.login).then(val => {
            this.bs.Action('type',this.userLoc,val.valid_username)
            this.bs.Action('type',this.passLoc,val.valid_password)
            this.bs.Action('click',this.submitLoc)
            this.bs.Verify('have.text',this.assert_loc_text,val.valid_assert)
        })
    }

    Login_With_Invalid_User()
    {
        cy.fixture(this.single).then(data => {
            cy.get(this.userLoc).type(data.username)
            cy.get(this.passLoc).type(data.password)
            cy.get(this.submitLoc).click()
        })
    }

}

export default LoginPage

