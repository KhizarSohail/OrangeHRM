import BasePage from "../../PageObjectModel/BasePage";
import LoginPage from "../../PageObjectModel/LoginPage";
describe('Login : Test Suite', ()=> {

    const bs = new BasePage
    const ln = new LoginPage

beforeEach(() => {
    bs.Visit()
})

it('Verify Valid Login', () => {
    bs.Wait_for(5000)
    ln.Login_With_Valid_User()
});

it('Verify InValid Login', () => {
    ln.Login_With_Invalid_User()
});

})