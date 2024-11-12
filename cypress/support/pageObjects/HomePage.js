class HomePage {
  goTo(url) {
    cy.visit(url);
  };

  login(userName, password) {
    cy.get("#username").type(userName);
    cy.get("#password").type(password);
    cy.contains("Sign In").click();
  };
}

const homePage = new HomePage();
export default homePage;
