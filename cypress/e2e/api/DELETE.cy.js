describe('GOREST DELETE API TEST', () => {
  it('DELETE API success test', () => {

    /*to generate random id from 1000 until 2500 */
    let random = Math.floor(Math.random() * (2500 - 1000 + 1) ) + 1000
    const url = 'https://gorest.co.in'
    const path = '/public/v2/users/'+random

    const tokenNew = "7610fe437444eb016cfa90cab29fa92d53d695abf4e131316c21132ed8eb4f9b"
    const tokenExpired = "10c6221f239f3e2dab00324c2fc1010b99241f01f2d550fd897240b2f5f5d7ae"

    cy.request({
      url: url + path,
      method: 'DELETE',
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenNew
      },
      }).then((res) => {
          // const responseBody =  JSON.stringify(res.body)
          console.log(res);
          expect(res.status).to.equal(204)
          expect(res.isOkStatusCode).to.be.true
          // expect(res.body[0]).to.have.property('id')
          // expect(res.body[0]).to.have.property('user_id')
          // expect(res.body[0]).to.have.property('title')
          // expect(res.body[0]).to.have.property('body')
      })
  })
})