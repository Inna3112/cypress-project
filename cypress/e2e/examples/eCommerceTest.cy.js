import homePage from '../../support/pageObjects/HomePage';
import productsPage from '../../support/pageObjects/ProductsPage';
import cartPage from '../../support/pageObjects/CartPage';
import confirmationPage from '../../support/pageObjects/ConfirmationPage';

//Terminal command for changing the environment variable (url) for the test:
//npx cypress run --spec cypress/e2e/examples/eCommerceTest.cy.js --env url=https://rahulshettyacademy.com

describe("E-commerce test", () => {
  const baseUrl = Cypress.env('url');
  let dataObj;
  before(() => {
    cy.fixture("example")
      .then(data => {
        dataObj = data;
      });
  })

  it("Submit order", () => {
    homePage.goTo(`${baseUrl}/loginpagePractise/#/`);
    homePage.login(dataObj.userName, dataObj.password);
    productsPage.pageValidation();
    productsPage.getCardCount().should("have.length", 4);
    productsPage.selectProduct(dataObj.productName);
    productsPage.selectFirstProduct();
    productsPage.goToCart();
    // for debug
    // cy.pause();
    // cy.debug();
    // cy.log(put something);
    cartPage.sumOfProducts()
      .then(sum => {
        expect(sum).to.be.lessThan(200000);
      });
    cartPage.checkoutItems();
    confirmationPage.submitFormDetails();
    const alertMessage = confirmationPage.getAlertMessage();
    alertMessage.should("contain", "Success");
  });
});
