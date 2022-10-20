import { faker } from '@faker-js/faker';

describe('GOREST UPDATE API TEST', () => {

  /*to generate random id from 1000 until 2500 */
  let random = Math.floor(Math.random() * (2500 - 1000 + 1) ) + 1000

  it('PUT API success test', () => {

    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
  
    const body = {
        "email": firstName+"."+lastName+random+"@email.com",
        "name": firstName+" "+lastName,
        "gender": "male",
        "status": "Inactive"
    }
    const url = 'https://gorest.co.in'
    const path = '/public/v2/users/'+random

    const tokenNew = "7610fe437444eb016cfa90cab29fa92d53d695abf4e131316c21132ed8eb4f9b"
    const tokenExpired = "10c6221f239f3e2dab00324c2fc1010b99241f01f2d550fd897240b2f5f5d7ae"

    cy.request({
      url: url + path,
      method: 'PUT',
      body: body,
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenNew
      },
      }).then((res) => {
          console.log(res);
          expect(res.status).to.equal(200)
          expect(res.isOkStatusCode).to.be.true
          expect(res.body).to.have.keys('id','email','name','gender','status')
          expect(res.body.name).to.equal(firstName+" "+lastName)
          expect(res.body.email).to.equal(firstName+"."+lastName+random+"@email.com")
          expect(res.body.gender).to.equal('male')
          expect(res.body.status).to.equal('inactive')
      })
  })

  it('PATCH API success test', () => {

    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
  
    const body = {
        "email": firstName+"."+lastName+random+"@email.com",
        "name": firstName+" "+lastName
    }
    const url = 'https://gorest.co.in'
    const path = '/public/v2/users/'+random

    const tokenNew = "7610fe437444eb016cfa90cab29fa92d53d695abf4e131316c21132ed8eb4f9b"
    const tokenExpired = "10c6221f239f3e2dab00324c2fc1010b99241f01f2d550fd897240b2f5f5d7ae"

    cy.request({
      url: url + path,
      method: 'PATCH',
      body: body,
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer "+tokenNew
      },
      }).then((res) => {
          console.log(res);
          expect(res.status).to.equal(200)
          expect(res.isOkStatusCode).to.be.true
          expect(res.body).to.have.keys('id','email','name','gender','status')
          expect(res.body.name).to.equal(firstName+" "+lastName)
          expect(res.body.email).to.equal(firstName+"."+lastName+random+"@email.com")
          expect(res.body.gender).to.equal('male')
          expect(res.body.status).to.equal('inactive')
      })
  })
})