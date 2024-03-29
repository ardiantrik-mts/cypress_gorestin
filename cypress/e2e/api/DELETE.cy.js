describe('GOREST DELETE API TEST', () => {
  it('DELETE API success test', () => {

    /*to generate random id from 1631 until 1659,
      sometimes there will be error because id is invalid/not found. 
      Please just restart the test if this happen */
    let random = Math.floor(Math.random() * (1659 - 1631 + 1) ) + 1631

    const url = 'https://gorest.co.in'
    const path = '/public/v2/users/'+random

    const tokenNew = "7610fe437444eb016cfa90cab29fa92d53d695abf4e131316c21132ed8eb4f9b"

    cy.request({
      url: url + path,
      method: 'DELETE',
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenNew
      },
      }).then((res) => {
          console.log(res);
          expect(res.status).to.equal(204)
          expect(res.isOkStatusCode).to.be.true
      })
  })

  it('DELETE API Auth Failed test', () => {

    /*to generate random id from 1631 until 1659,
      sometimes there will be error because id is invalid/not found. 
      Please just restart the test if this happen */
    let random = Math.floor(Math.random() * (1659 - 1631 + 1) ) + 1631

    const url = 'https://gorest.co.in'
    const path = '/public/v2/users/'+random

    cy.request({
      url: url + path,
      method: 'DELETE',
      failOnStatusCode: false,
      headers: {

      },
      }).then((res) => {
          console.log(res);
          expect(res.status).to.equal(401)
          expect(res.isOkStatusCode).to.be.false
          expect(res.body.message).to.equal('Authentication failed')

      })
  })
})