// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe("PhoneBook", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("adds 2 todos", function () {
    // Add first Contact
    cy.get('[data-testid="input-FirstName"]').first().type("F Name");
    cy.get('[data-testid="input-LastName"]').first().type("L Name");
    cy.get('[data-testid="input-PhoneNumber"]').first().type("1111111");
    cy.get('[data-testid="button-submit"]').first().type("click");

     // Add 2nd Contact
    cy.get('[data-testid="input-FirstName"]').first().type("F Name1");
    cy.get('[data-testid="input-LastName"]').first().type("L Name1");
    cy.get('[data-testid="input-PhoneNumber"]').first().type("222222");
    cy.get('[data-testid="button-submit"]').first().type("click");

    cy.get('[data-testid="table-item"]').should("have.length", 2);
    
    // Add search term
    cy.get('[data-testid="input-FirstName"]').last().type("F");
    cy.get('[data-testid="input-LastName"]').last().type("L");
    
    cy.get('[data-testid="table-item"]').should("have.length", 2);

    // Add 2nd search term
    cy.get('[data-testid="input-FirstName"]').last().type("L");
    cy.get('[data-testid="input-LastName"]').last().type("LB");

    cy.get('[data-testid="table-item"]').should("have.length", 0);
  });
});
