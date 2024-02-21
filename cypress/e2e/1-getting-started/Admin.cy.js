import AdminPage from "../../PageObjectModel/Admin"
import BasePage from "../../PageObjectModel/BasePage"
import LoginPage from "../../PageObjectModel/LoginPage"



describe("Add User Page Test Suite",() => 
{
    const bs = new BasePage
    const ln = new LoginPage
    const admn = new AdminPage
    
    beforeEach(() => {
        bs.Visit()
    })

    it("Adding an Admin Flow", () => {
        ln.Login_With_Valid_User()
        bs.Wait_for(1000)
        admn.Admin_Add_User()
        bs.Wait_for(6000)
        admn.Search_User("Karter")
        bs.Wait_for(4000)
        admn.Edit_User()
        bs.Wait_for(6000)
        admn.Search_User("Joseph12")
        admn.DeleteUser()
    })

})