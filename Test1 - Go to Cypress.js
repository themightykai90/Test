describe('Going to Cypress', function() {

it('Just goes to Cypress Docs Page', function() {
  //Cypress can't go to Superdomains
 cy.visit('https://docs.cypress.io');
//go to search form
})

  it('Type into Search Element', () => {
  cy.get('.ds-input')
  .type('Core Concepts').should('have.value', 'Core Concepts')

})

  it('.Clearing Search', () => {
    cy.get('.ds-input').clear().should('have.value', '')

})

it('.sidebar-li() - Clicking on List', () => {
  cy.get('.sidebar-title').find('li').eq(2).click()
})

it('Moving to Next Page and asserting the URL', () => {
cy.url().should('include', '/installing-cypress.html')





 })
})
