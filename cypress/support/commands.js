// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//можна додавати кастомні команди
//викликати cy.submitFormDetails();
Cypress.Commands.add("submitFormDetails", () => {
  cy.get("#country").type("India");
  //змінить лише для цього тесту але не працює
  // Cypress.config("defaultCommandTimeout", 10000);
  cy.wait(5000);
  cy.get(".suggestions > ul > li > a").click();
  cy.get(".btn-success").click();
})
//можна додавати кастомні квері
Cypress.Commands.addQuery("getById", (id) => {
  const getFn = cy.now("get", `[data-cy=${id}]`);
  return () => {
    return getFn();
  }
})
