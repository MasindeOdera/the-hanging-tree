// https://docs.cypress.io/api/introduction/api.html

describe("Display Page not found", () => {
  it("Should display text if URL not found", () => {
    cy.visit("#/candy");
    cy.contains("h2", "This Page was not found");
  });
});
