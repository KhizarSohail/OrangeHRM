import BasePage from "./BasePage";

 const bs = new BasePage;
 const admin = "../fixtures/Admin/Admin.json"
 const search = "../fixtures/Admin/Search.json"
 const edit = "../fixtures/Admin/Edit.json";
 const Delete = "../fixtures/Admin/Delete.json";

 class AdminPage
{
    
    Admin_Add_User()
    {
        cy.fixture(admin).then((fetch) =>
        {
            bs.Action("click",fetch.Locators.menuBtn_Loc);
            bs.Action("click",fetch.Locators.AddUserBtn_Loc);

            bs.Verify("have.text", fetch.Locators.AdminTitle_Loc, fetch.Data.expectedTitle)
            //user role
            bs.Action("type", fetch.Locators.User_Role_Loc,"{downArrow}{downArrow}")
            bs.Action("type", fetch.Locators.User_Role_Loc,"{enter}"); 
            //emp role
            bs.Action("type", fetch.Locators.Emp_Name_Loc,fetch.Data.EmployeName_Data)
            bs.Wait_for(2000);
            bs.Action("type", fetch.Locators.Emp_Name_Loc,"{downArrow}");
            bs.Wait_for(2000);
            bs.Action("type", fetch.Locators.Emp_Name_Loc,"{enter}"); 
            //status
            bs.Action("type", fetch.Locators.Status_Loc,"{downArrow}");
            bs.Wait_for(2000)
            bs.Action("type", fetch.Locators.Status_Loc,"{enter}");
            //username, pass, confirm pass
           bs.Action("type", fetch.Locators.Username_Loc, fetch.Data.Username_Data);
            bs.Action("type", fetch.Locators.Password_Loc, fetch.Data.Password_Data);
            bs.Action("type", fetch.Locators.ConfirmPass_Loc, fetch.Data.ConfirmPass_Data);
            //save button
            bs.Action("click", fetch.Locators.SaveBtn_Loc);
 
        })
    }
    Search_User(userforSearch)
    {
        cy.fixture(search).then((fetch) => 
        {
            bs.Action("type", fetch.Locators.Search_User_Loc, userforSearch);
            bs.Action("click", fetch.Locators.SearchBtn_Loc);  
        })
    }
    Edit_User()
    {
        cy.fixture(edit).then((fetch) => {
            bs.Action("click", fetch.Locators.EditBtn_Loc);  
             
            bs.Action("clear", fetch.Locators.Username_Loc); 
            
            bs.Action("type", fetch.Locators.Username_Loc,fetch.Data.EditUsername_Data);

            bs.Action("click",fetch.Locators.SaveBtn_Loc)
        })
    }
    
    DeleteUser()
    {   
        cy.fixture(Delete).then((fetch) => {
            bs.Action("click",fetch.Locators.DeleteBtn_Loc);
            bs.Action("click",fetch.Locators.DeleteBtn_Cnfrm_Loc);
        } )
    }
}
export default AdminPage;