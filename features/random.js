const {Given, Then, And} = require('@badeball/cypress-cucumber-preprocessor')


Given("navigate to the webstite", () => {
    cy.visit("https://www.google.com")
})

Then("enter any word in the text field", () => {
    cy.get(".gLFyf").type("AI")
})

Then("click the search button", () => {
    cy.get(".pcTkSc").last().click({force: true})
})

