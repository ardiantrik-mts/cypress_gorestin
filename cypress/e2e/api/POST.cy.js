import { faker } from '@faker-js/faker';

describe('GOREST POST API TEST', () => {
  it('POST API success test', () => {

    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    let random = Math.floor(Math.random() * 100)
    const body = {
      "email": firstName+"."+lastName+random+"@email.com",
      "name": firstName+" "+lastName,
      "gender": "male",
      "status": "Active"
    }
    const url = 'https://gorest.co.in'
    const path = '/public/v2/users'

    const tokenNew = "7610fe437444eb016cfa90cab29fa92d53d695abf4e131316c21132ed8eb4f9b"
    const tokenExpired = "10c6221f239f3e2dab00324c2fc1010b99241f01f2d550fd897240b2f5f5d7ae"

    cy.request({
      url: url + path,
      method: 'POST',
      body: body,
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenNew
      },
      }).then((res) => {
          // const responseBody =  JSON.stringify(res.body)
          console.log(res.body.name);
          expect(res.status).to.equal(201)
          expect(res.isOkStatusCode).to.be.true
          expect(res.body).to.have.keys('id','email','name','gender','status')
          expect(res.body.name).to.equal(firstName+" "+lastName)
          expect(res.body.email).to.equal(firstName+"."+lastName+random+"@email.com")
          expect(res.body.gender).to.equal('male')
          expect(res.body.status).to.equal('active')
      })
  })
})