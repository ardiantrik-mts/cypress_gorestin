describe('GOREST GET API TEST', () => {

  const url = 'https://gorest.co.in'
  const path = '/public/v2/users'

  it('GET API All Success Test', () => {
    cy.request({
      url: url + path,
      method: 'GET',
          failOnStatusCode: false,
          headers: {
              
              },
      }).then((res) => {
          expect(res.status).to.equal(200)
          expect(res.isOkStatusCode).to.be.true
          expect(res.body[0]).to.have.keys('id','email','name','gender','status')
      })
  })

  it('GET API Detail Success Test', () => {
    cy.request({
      url: url + path + "/274",
      method: 'GET',
          failOnStatusCode: false,
          headers: {
              
              },
      }).then((res) => {
          console.log(res)
          expect(res.status).to.equal(200)
          expect(res.isOkStatusCode).to.be.true
          expect(res.body).to.have.keys('id','email','name','gender','status')
          expect(res.body.id).to.equal(274)
          expect(res.body.name).to.equal('Vinay Gill')
          expect(res.body.email).to.equal('vinay_gill@hodkiewicz-krajcik.com')
          expect(res.body.gender).to.equal('male')
          expect(res.body.status).to.equal('inactive')
      })
  })

  it('GET API Invalid Resource Test', () => {
    cy.request({
      url: url + path + "/failed",
      method: 'GET',
          failOnStatusCode: false,
          headers: {
              
              },
      }).then((res) => {
          console.log(res)
          expect(res.status).to.equal(404)
          expect(res.isOkStatusCode).to.be.false
      })
  })
})