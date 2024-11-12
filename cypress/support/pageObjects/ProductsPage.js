class ProductsPage {
  pageValidation() {
    cy.contains("Shop Name").should("be.visible");
  };

  getCardCount() {
    return cy.get("app-card");
  };

  selectProduct(productName) {
    //.filter() method of jQuery
    cy.get("app-card").filter(`:contains(${productName})`)
      .then($element => {
        cy.wrap($element).should("have.length", 1);
        cy.wrap($element).contains("button", "Add").click();
      });
  }

  selectFirstProduct() {
    cy.get("app-card").eq(0).contains("button", "Add").click();
  }

  goToCart() {
    cy.contains("a", "Checkout").click();
  }
}

const productsPage = new ProductsPage();

export default productsPage;
