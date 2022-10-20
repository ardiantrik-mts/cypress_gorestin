import { faker } from '@faker-js/faker';

describe('GOREST POST API TEST', () => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  const url = 'https://gorest.co.in'
  const path = '/public/v2/users'

  const tokenNew = "7610fe437444eb016cfa90cab29fa92d53d695abf4e131316c21132ed8eb4f9b"
  const tokenExpired = "10c6221f239f3e2dab00324c2fc1010b99241f01f2d550fd897240b2f5f5d7ae"

  let random = Math.floor(Math.random() * 100)
  const body = {
    "email": firstName+"."+lastName+random+"@email.com",
    "name": firstName+" "+lastName,
    "gender": "male",
    "status": "Active"
  }

  it('POST API Success Test', () => {
    cy.request({
      url: url + path,
      method: 'POST',
      body: body,
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenNew
      },
      }).then((res) => {
          console.log(res.body);
          expect(res.status).to.equal(201)
          expect(res.isOkStatusCode).to.be.true
          expect(res.body).to.have.keys('id','email','name','gender','status')
          expect(res.body.name).to.equal(firstName+" "+lastName)
          expect(res.body.email).to.equal(firstName+"."+lastName+random+"@email.com")
          expect(res.body.gender).to.equal('male')
          expect(res.body.status).to.equal('active')
      })
  })

  it('POST API Auth Failed Test', () => {
    cy.request({
      url: url + path,
      method: 'POST',
      body: body,
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenExpired
      },
      }).then((res) => {
          console.log(res);
          expect(res.status).to.equal(401)
          expect(res.isOkStatusCode).to.be.false
          expect(res.body.message).to.equal('Authentication failed')
      })
  })

  it('POST API Invalid Resource Test', () => {
    cy.request({
      url: url + '/public/v2/userrs',
      method: 'POST',
      body: body,
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenNew
      },
      }).then((res) => {
          console.log(res);
          expect(res.status).to.equal(404)
          expect(res.isOkStatusCode).to.be.false
      })
  })

  it('POST API Validation Failed Test', () => {
    cy.request({
      url: url + path,
      method: 'POST',
      body: {
        "email": firstName+"."+lastName+random+"@email.com",
        "name": firstName+" "+lastName,
        "genderrrrrrrr": "male",
        "status": "Active"
      },
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenNew
      },
      }).then((res) => {
          console.log(res.body);
          expect(res.status).to.equal(422)
          expect(res.isOkStatusCode).to.be.false
      })
  })
})