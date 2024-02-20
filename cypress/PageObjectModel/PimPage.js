import BasePage from "./BasePage";

const bs = new BasePage;
const Pim = "../fixtures/PIM/pim.json"

class PimPage{

    Add_Employee(){
        cy.fixture(Pim).then(fetch => {
            console.log(fetch.Locators.menuBtn_Locator)
            bs.Action('click', fetch.Locators.menuBtn_Locator)
            bs.Verify('have.text', fetch.Locators.PageTitle_Locator, fetch.Data.expectedTitle)
        })
    }



}

export default PimPage