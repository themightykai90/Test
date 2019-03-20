describe('Calling an API', function() {

it('It calls all the countries', function() {
cy.request('https://restcountries.eu/rest/v2/all')

})
})

it('.Clearing Search', () => {
cy.request('GET', 'https://restcountries.eu/rest/v2/name/ireland')

})
})
