class ConfirmationPage {
  submitFormDetails() {
   cy.submitFormDetails();
  }

  getAlertMessage() {
    return  cy.get(".alert-success");
  }
}

const confirmationPage = new ConfirmationPage();

export default confirmationPage;
