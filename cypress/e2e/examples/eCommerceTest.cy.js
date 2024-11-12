import homePage from '../../support/pageObjects/HomePage';
import productsPage from '../../support/pageObjects/ProductsPage';
import cartPage from '../../support/pageObjects/CartPage';
import confirmationPage from '../../support/pageObjects/ConfirmationPage';

describe("E-commerce test", () => {
  let dataObj;
  before(() => {
    cy.fixture("example")
      .then(data => {
        dataObj = data;
      });
  })

  it("Submit order", () => {
    homePage.goTo("https://rahulshettyacademy.com/loginpagePractise/#/");
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
