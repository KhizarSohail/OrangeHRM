import AdminPage from "../../PageObjectModel/Admin";
import BasePage from "../../PageObjectModel/BasePage";
import LoginPage from "../../PageObjectModel/LoginPage";
describe('Login : Test Suite', ()=> {

    const bs = new BasePage
    const ln = new LoginPage
    const Admn = new AdminPage

beforeEach(() => {
    bs.Visit()
})

it.only('Verify Valid Login', () => {
    bs.Wait_for(5000)
    ln.Login_With_Valid_User()

});

it('Verify InValid Login', () => {
    bs.Wait_for(5000)
    ln.Login_With_Invalid_User()
});

})