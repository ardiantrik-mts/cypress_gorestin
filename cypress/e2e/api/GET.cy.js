describe('GOREST GET API TEST', () => {
  it('GET API success test', () => {

    const url = 'https://gorest.co.in'
    const path = '/public/v2/posts'

    cy.request({
      url: url + path,
      method: 'GET',
          failOnStatusCode: false,
          headers: {
              
              },
      }).then((res) => {
          // const responseBody =  JSON.stringify(res.body)
          // // cy.log('responseBody');
          expect(res.status).to.equal(200)
          expect(res.isOkStatusCode).to.be.true
          expect(res.body[0]).to.have.property('id')
          expect(res.body[0]).to.have.property('user_id')
          expect(res.body[0]).to.have.property('title')
          expect(res.body[0]).to.have.property('body')
      })
  })
})