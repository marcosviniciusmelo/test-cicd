describe('test E2E', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  it('Step 01: Test first endpoint', () => {

    cy.request({
      method: "get",
      url: "https://viacep.com.br/ws/60325002/json"
    }).then((response) => {
      expect(response.status).to.equal(200)
    })

  })
})