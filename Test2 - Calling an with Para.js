describe('Calling an a param', function() {

it('It calls all the countries', () => {
cy.request('GET', 'https://restcountries.eu/rest/v2/name/ireland')
expect(response.status).to.eq(200)
})
})
