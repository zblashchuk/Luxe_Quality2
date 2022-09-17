const { faker } = require('@faker-js/faker')
const Page = require('../pageobjects/page')
class GenerateDataPage extends Page{
  get generateUser()
  {
    const userLogin = "UserLogin" + Math.random().toString().slice(2, 7)
    const email = `${userLogin}@gmail.com`
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const password = Math.random().toString().slice(2,7)
    return {email, password, lastName, userLogin, firstName};
  }
}
module.exports = new GenerateDataPage();