import PimPage from "../../PageObjectModel/PimPage";
import LoginPage from "../../PageObjectModel/LoginPage";
import BasePage from "../../PageObjectModel/BasePage";


describe('PIM Page Test Suite', () => {
    
    const bs = new BasePage
    const ln = new LoginPage
    const pim = new PimPage 

    beforeEach(() => {
        bs.Visit()
    })

    it('Clicks on the Side Menu', () => {
        ln.Login_With_Valid_User()
        bs.Wait_for(2000)
        pim.Add_Employee()
    });
})