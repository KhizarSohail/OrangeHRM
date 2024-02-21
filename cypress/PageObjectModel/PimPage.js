import BasePage from "./BasePage";

const bs = new BasePage;
const Pim = "../fixtures/PIM/pim.json"

class PimPage{

     Create_PIM_User(){
        this.Add_Employee()
        this.Create_Login_Details()
     } 


    Create_Login_Details(){
        cy.fixture(Pim).then(fetch => {
            bs.Action('check', fetch.Locators.Login_Radio_Locators)
            bs.Action('write', fetch.Locators.Username_Locator, fetch.Data.username_Data)
            bs.Action('write', fetch.Locators.Password_Locator, fetch.Data.password_Data)
            bs.Action('write', fetch.Locators.Confirm_Password_locator, fetch.Data.Confirmpass_Data)
            bs.Action('click', fetch.Locators.SaveBtn)
        })
    }

    Add_Employee(){
        cy.fixture(Pim).then(fetch => {
            
            bs.Action('click', fetch.Locators.menuBtn_Locator)
            bs.Verify('have.text', fetch.Locators.PageTitle_Locator, fetch.Data.expectedTitle)
            bs.Action('click', fetch.Locators.AddBtn_Locator)
            bs.Action('write', fetch.Locators.FirstName_Locator, fetch.Data.Firstname_Data)
            bs.Action('write', fetch.Locators.MiddleName_Locator, fetch.Data.Middlename_Data)
            bs.Action('write', fetch.Locators.LastName_Locator, fetch.Data.Lastname_Data)
            bs.Action('write', fetch.Locators.EmpID_Locator, fetch.Data.EmpID_Data)
        })
    }



}

export default PimPage