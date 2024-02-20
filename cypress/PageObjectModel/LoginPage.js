import BasePage from "./BasePage";

    const bs = new BasePage();  
    const login = '../fixtures/LoginJson/login.json' 

class LoginPage{
    
    
    Login_With_Valid_User()
    {
        cy.fixture(login).then(val => {
            bs.Action('type', val.Locators.userLocator, val.Valid_Data.valid_username)
            bs.Action('type', val.Locators.passLocator, val.Valid_Data.valid_password)
            bs.Action('click', val.Locators.submitLocator)
            bs.Wait_for(2000)
            bs.Verify('have.text', val.Locators.valid_assert_loc, val.Valid_Data.valid_assert)
        })
    }

    Login_With_Invalid_User()
    {
        cy.fixture(login).then(data => {
            bs.Action('write', data.Locators.userLocator, data.Invalid_Data.invalid_username)
            bs.Action('write', data.Locators.passLocator, data.Invalid_Data.invalid_password)
            bs.Action('click', data.Locators.submitLocator)
            bs.Verify('have.text', data.Locators.errorLocator, data.Invalid_Data.invalid_error_message)
        })
    }

}

export default LoginPage

