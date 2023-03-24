describe('Test E2E', () => {

  it('Step 01: First endpoint', () => {

    cy.request({
      method: "get",
      url: "https://viacep.com.br/ws/60325002/json"
    }).then((response) => {
      expect(response.status).to.equal(200)
    })

  })
})