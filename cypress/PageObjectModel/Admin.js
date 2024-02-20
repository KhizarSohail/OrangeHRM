import BasePage from "./BasePage";


class AdminPage
{
    bs = new BasePage();
 
    admin_tab = '.oxd-sidepanel-body > ul > li:nth-child(1) > a > span';
    adduserBtn = '.orangehrm-paper-container > div.orangehrm-header-container > button';
    admin = '../fixtures/Adminjson/admin.json';
    User_Role =  ':nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text-input';
    Emp_name = ':nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input';
    status = ':nth-child(3) > div > div:nth-child(2) > div > div > div.oxd-select-text-input';
    username = ':nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input';
    password = '.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input';
    confrmPass = ':nth-child(2) > div > div:nth-child(2) > input';
    Save_button = '.oxd-button--secondary';
    
    Admin_Add_User()
    {
        this.bs.Action("click",this.admin_tab);
        this.bs.Action("click",this.adduserBtn);
        cy.fixture(this.admin).then((val) =>
        {
            //admin side menu
            this.bs.Action("click",this.admin_tab);
            //add user button
            this.bs.Action("click",this.adduserBtn);         
            //user role
            this.bs.Action("type",this.User_Role,"{downArrow}")
            this.bs.Action("click",this.User_Role); 
            //emp role
            this.bs.Action("type",this.Emp_name,"Rahul")
            this.bs.Wait_for(3000);
            this.bs.Action("type",this.Emp_name,"{downArrow}");
            this.bs.Wait_for(3000);
            this.bs.Action("type",this.Emp_name,"{enter}"); 
            //status
            this.bs.Action("type",this.status,'{downArrow}')
            this.bs.Action("click",this.status);
            //username, pass, confirm pass
            this.bs.Action("type",this.username,"Hamza");
            this.bs.Action("type",this.password,"Ali1234");
            this.bs.Action("type",this.confrmPass,"Ali1234");
            //save button
            this.bs.Action("click",this.Save_button);
        })
        
    }
}
export default AdminPage;