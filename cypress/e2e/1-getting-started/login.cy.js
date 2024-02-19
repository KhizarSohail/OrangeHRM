import BasePage from "../../PageObjectModel/BasePage";
import LoginPage from "../../PageObjectModel/LoginPage";
describe('describe', ()=> {

    const bs = new BasePage
    const ln = new LoginPage

beforeEach(() => {
    bs.Visit()
})

it('Verify Valid Login', () => {
    ln.Login_With_Valid_User()
});

})